'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css"; // Import Quill styles


const FilterableTable = () => {
  const [locations, setLocations] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [image, setImage] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;



  


  // Load ReactQuill dynamically (to avoid SSR issues)
  const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });


  const uploadedImageUrl = process.env.NEXT_PUBLIC_UPLOADED_IMAGE_URL || "https://swabiapp.rapidtechpro.com/uploads";

  const [newLocation, setNewLocation] = useState({
    id: '',
    slug: '',
    name: '',
    description: '',
    imageUrl: '',
    meta_title: '',
    meta_description: '',
    meta_keywords: '',
  });

  useEffect(() => {
    fetchLocations();
  }, []);

  const fetchLocations = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/locations');
      if (!response.ok) throw new Error('Failed to fetch locations');
      const data = await response.json();
      setLocations(data.data || []);
    } catch (error) {
      console.error('Error fetching locations:', error);
    }
    setIsLoading(false);
  };

 
  const handleAddOrUpdateLocation = async () => {
    setIsLoading(true);
    try {
      let imageUrl = newLocation.imageUrl;
  
      // ✅ Ensure slug is properly generated
      if (!newLocation.slug) {
        newLocation.slug = newLocation.name
          .toLowerCase()
          .replace(/\s+/g, "-")
          .replace(/[^a-z0-9-]/g, "")
          .trim();
      }
  
      if (!newLocation.slug) {
        throw new Error("❌ Slug is missing");
      }
  
      // ✅ Upload Image if Needed
      if (image) {
        const imageBase64 = await convertToBase64(image);
        const response = await fetch(`${process.env.NEXT_PUBLIC_UPLOAD_IMAGE_API}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ image: imageBase64 }),
        });
  
        const result = await response.json();
        if (response.ok) {
          imageUrl = result.image_url;
        } else {
          throw new Error(result.error || "Failed to upload image");
        }
      }
  
      // ✅ Define the object before making the API request
      const locationToSubmit = { ...newLocation, imageUrl };
  
      console.log("📡 API Call Data:", locationToSubmit);
  
      // ✅ Ensure correct API URL and method
      const isUpdating = !!newLocation.slug;
      console.log("The value is  -------------------------------------  :" + newLocation.slug);
      const apiUrl = isUpdating ? `/api/locations/${newLocation.slug}` : "/api/locations";
      const method = isUpdating ? "PUT" : "POST";
  
      const response = await fetch(apiUrl, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(locationToSubmit),
      });
  
      const responseData = await response.json();
      console.log("✅ API Response:", responseData);
  
      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}, Message: ${responseData.message}`);
  
      // Reset Form
      setNewLocation({
        id: "",
        slug: "",
        name: "",
        description: "",
        imageUrl: "",
        meta_title: "",
        meta_description: "",
        meta_keywords: "",
      });
  
      setImage(null);
      setIsModalOpen(false);
      fetchLocations();
    } catch (error) {
      console.error("❌ Error adding or updating location:", error);
    }
    setIsLoading(false);
  };
  
  
  




  

  const handleDeleteLocation = async (slug) => {
    setIsLoading(true);
    try {
      const response = await fetch(`/api/locations/${slug}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      });

      if (!response.ok) throw new Error(`Failed to delete location with slug: ${slug}`);

      fetchLocations();
    } catch (error) {
      console.error('Error deleting location:', error);
    }
    setIsLoading(false);
  };

  const handleEditLocation = (location) => {
    setNewLocation({
      id: location.id,
      slug: location.slug || location.name.toLowerCase().replace(/\s+/g, '-'), // ✅ Ensure slug is set
      name: location.name,
      description: location.description || '',
      imageUrl: location.imageUrl || '',
      meta_title: location.meta_title || '',
      meta_description: location.meta_description || '',
      meta_keywords: location.meta_keywords || '',
    });
    setIsModalOpen(true);
  };

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      {isLoading && <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">Loading...</div>}

      <div className="bg-white shadow rounded-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Locations List</h2>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" onClick={() => setIsModalOpen(true)}>
            + Add Location
          </button>
        </div>

        {/* Data Table */}
        <table className="min-w-full bg-white border border-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th>ID</th>
              <th>Image</th>
              <th>Slug</th>
              <th>Name</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {locations.map((item) => (
              <tr key={item.slug} className="border-t">
                <td>{item.id}</td>
                <td>
                  {item.imageUrl && (
                    <Image width={100} height={100} src={`${uploadedImageUrl}/${item.imageUrl}`} alt={item.name} className="w-16 h-16 object-cover" />
                  )}
                </td>
                <td>{item.slug}</td>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>
                  <button className="text-blue-600 mr-2" onClick={() => handleEditLocation(item)}>Edit</button>
                  <button className="text-red-600" onClick={() => handleDeleteLocation(item.slug)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal for Adding/Editing */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded shadow-lg w-1/2">
            <h2 className="text-xl mb-4">{newLocation.slug ? 'Edit Location' : 'Add New Location'}</h2>

            <input type="text" placeholder="Name" value={newLocation.name} onChange={(e) => setNewLocation({ ...newLocation, name: e.target.value, slug: e.target.value.toLowerCase().replace(/\s+/g, '-') })} className="w-full mb-3 p-2 border" />
            <input 
              type="text" 
              placeholder="Slug" 
              value={newLocation.slug} 
              onChange={(e) => setNewLocation({ 
                ...newLocation, 
                slug: e.target.value.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '') 
              })} 
              className="w-full mb-3 p-2 border" 
            />
            <ReactQuill
              value={newLocation.description}
              onChange={(value) => setNewLocation({ ...newLocation, description: value })}
              className="border rounded-lg"
            />     
            <input type="file" onChange={(e) => setImage(e.target.files[0])} className="w-full mb-3 p-2 border" />
            <input type="text" placeholder="Meta Title" value={newLocation.meta_title} onChange={(e) => setNewLocation({ ...newLocation, meta_title: e.target.value })} className="w-full mb-3 p-2 border" />
            
            <input type="text" placeholder="Meta Description" value={newLocation.meta_description} onChange={(e) => setNewLocation({ ...newLocation, meta_description: e.target.value })} className="w-full mb-3 p-2 border" />
            <input type="text" placeholder="Meta Keywords" value={newLocation.meta_keywords} onChange={(e) => setNewLocation({ ...newLocation, meta_keywords: e.target.value })} className="w-full mb-3 p-2 border" />
           
            
            
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" onClick={handleAddOrUpdateLocation}>
              {newLocation.slug ? 'Update' : 'Add'}
            </button>
            <button className="ml-2 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600" onClick={() => setIsModalOpen(false)}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterableTable;
