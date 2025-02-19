'use client';

import React, { useEffect, useState } from 'react';
import DOMPurify from 'dompurify';
import Image from 'next/image';
import Benifit from '../../../../components/Benefits';
import OrderForm from '../../../../components/orderform';
import WhyChooseUs from '../../../../components/WhyChooseUs';
import Footer from '../../../../components/abovefooter';
import Header from '../../../../components/DesktopNavbar';

const LocationsPage = ({ id }) => {
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Get the base URL for images from .env
  const imageBaseUrl = process.env.NEXT_PUBLIC_UPLOADED_IMAGE_URL;

  useEffect(() => {
    const fetchLocationData = async () => {
      if (!id) return; // Prevent API call if `id` is undefined

      try {
        setLoading(true);
        setError(null); // Reset errors before fetching

        const response = await fetch(`/api/locations/${id}`);
        if (!response.ok) {
          throw new Error(`Failed to fetch location data: ${response.status}`);
        }

        const data = await response.json();
        setLocation(data?.data || data); // Handle cases where `data` is wrapped
      } catch (error) {
        console.error("Error fetching location data:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchLocationData();
  }, [id]); // Runs only when `id` changes

  const sanitizeDescription = (description) => {
    if (!description) return ''; // Prevents errors if `description` is null

    // Remove `body {}` styles inside <style> tags
    const bodyStyleRegex = /<style\b[^>]*>([\s\S]*?)<\/style>/gi;
    const updatedDescription = description.replace(bodyStyleRegex, (match) => {
      return match.replace(/body\s*{[^}]*}/gi, '');
    });

    return DOMPurify.sanitize(updatedDescription);
  };

  return (
    <>
      <Header />
      <div className="h-40"></div>

      <div className="bg-gray-100 mx-5">
        {loading ? (
          <div className="animate-pulse">
            <div className="h-36 bg-gray-300 mb-4"></div>
            <div className="h-6 bg-gray-300 w-1/3 mb-2"></div>
            <div className="h-4 bg-gray-300 w-1/2"></div>
          </div>
        ) : error ? (
          <div className="text-red-600 text-lg font-semibold">{error}</div>
        ) : location ? (
          <div className="bg-white p-6 rounded-lg flex flex-col md:flex-row items-start gap-6">
          {/* Left Side - Image */}
          <div className="w-full md:w-1/2">
            <div className="relative w-full aspect-video">
              <Image
                src={`${imageBaseUrl}/${location.imageUrl}`}
                alt={location.name || location.name}
                width={0}
                height={0}
                sizes="100vw"
                className="w-[100vw] h-auto rounded-lg shadow-md object-cover"
              />
            </div>
          </div>
        
          {/* Right Side - Content */}
          <div className="w-full md:w-1/2 p-4 rounded-lg flex flex-col items-start">
            <h2 className="text-2xl font-semibold text-gray-800">{location.name}</h2>
            <p
              className="mt-4 text-gray-600 text-lg"
              dangerouslySetInnerHTML={{ __html: sanitizeDescription(location.description) }}
            ></p>
          </div>
        </div>
        ) : null}
      </div>

      {/* Additional Sections */}
      <WhyChooseUs />
      <OrderForm />
      <Benifit />
    
    </>
  );
};

export default LocationsPage;
