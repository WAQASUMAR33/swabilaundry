"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import TopBar from "./topbar";
import { sendGTMEvent } from "@next/third-parties/google";

const DesktopNavbar = () => {
  const [isServicesMenuOpen, setServicesMenuOpen] = useState(false);
  const [isLocationMenuOpen, setLocationMenuOpen] = useState(false);

  const [services, setServices] = useState([]);
  const [locations, setLocations] = useState([]);

  const phoneNumber = "971589920080";
  const message =
    "Hi Swabi Laundry team. I would like to know about the pricing, service, and want to schedule a free pickup.";
  const encodedMessage = encodeURIComponent(message);

  const handleClick = () => {
    sendGTMEvent({ event: "whatsappclick", value: "kjxyz" });
    console.log("WhatsApp link clicked");
  };

  useEffect(() => {
    // Fetch services
    fetch("/api/subcategories/slidercat")
      .then((res) => res.json())
      .then((data) => setServices(data.data)) // ✅ Extract `data` array
      .catch((err) => console.error("Error fetching services:", err));

    // Fetch locations
    fetch("/api/locations")
      .then((res) => res.json())
      .then((data) => setLocations(data.data)) // ✅ Extract `data` array
      .catch((err) => console.error("Error fetching locations:", err));
  }, []);

  return (
    <>
      <TopBar />
      <div className="hidden lg:flex justify-between items-center w-full bg-white shadow-md fixed top-10 left-0 right-0 z-40 p-4">
        {/* Logo Section */}
        <div className="flex items-center">
          <Link href="/" aria-label="Homepage" className="flex items-center">
            <img src="/swabi logo.png" width={70} height={70} className="ml-10 pb-1" alt="Logo" />
            <img src="/swabi text.png" width={90} className="ml-5 p-1" alt="Text Logo" />
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-4 text-lg">
        <Link 
  href="/" 
  className="nav-link font-normal text-[#747F8E] hover:text-blue-600 px-2 py-2" 
  style={{ fontFamily: "'Poppins', sans-serif", textDecoration: "none" }}
>
  Home
</Link>

<Link 
  href="/pages/aboutus/" 
  className="nav-link font-normal text-[#747F8E] hover:text-blue-600 px-2 py-2" 
  style={{ fontFamily: "'Poppins', sans-serif", textDecoration: "none" }}
>
  About
</Link>

  {/* Mega Menu - Services */}
<div
  className="relative"
  onMouseEnter={() => setServicesMenuOpen(true)}
  onMouseLeave={() => setServicesMenuOpen(false)}
>
<button className="nav-link font-normal text-[#747F8E] hover:text-blue-600 px-2 py-2" style={{ fontFamily: "'Poppins', sans-serif", textDecoration: "none" }}>
  Services
</button>

  {isServicesMenuOpen && (
    <div
    className="absolute top-full left-1/2 transform -translate-x-1/3 bg-white shadow-lg p-5 grid grid-cols-5 gap-5 w-96 max-w-screen-xl z-50 rounded-lg"

      style={{ minWidth: "1100px" }} // Adjust the width as needed
    >
      {services.length > 0 ? (
        services.map((category) => (
          <div key={category.id} className="col-span-1">
            {/* Category Name */}
            <h3 className="text-md font-normal text-gray-900 border-b pb-1 mb-2">
              {category.name}
            </h3>

            {/* Subcategories */}
            {category.subcategories.length > 0 ? (
              category.subcategories.map((subcategory) => (
                <Link
                  key={subcategory.id}
                  href={`/pages/services/${subcategory.slug}`}
                  className="block text-sm text-gray-700 hover:text-blue-600 py-0.5"
                >
                  {subcategory.name}
                </Link>
              ))
            ) : (
              <p className="text-xs text-gray-400">No Service</p>
            )}
          </div>
        ))
      ) : (
        <p className="text-sm text-gray-500">Loading...</p>
      )}
    </div>
  )}
</div>




          {/* Mega Menu - Locations (Dynamic) */}
          <div
            className="relative"
            onMouseEnter={() => setLocationMenuOpen(true)}
            onMouseLeave={() => setLocationMenuOpen(false)} >
            <button 
              className="nav-link font-normal text-[#747F8E] hover:text-blue-600 px-2 py-2" 
              style={{ fontFamily: "'Poppins', sans-serif", textDecoration: "none" }}
            >
              Locations
            </button>

            {isLocationMenuOpen && (
              <div
                className="absolute top-full left-1/2 transform -translate-x-1/2 bg-white shadow-lg p-5 grid grid-cols-4 gap-5 w-[700px] z-50 rounded-lg"
              >
                {locations.length > 0 ? (
                  locations.map((location) => (
                    <div key={location.id} className="col-span-1">
                      {/* Location Name */}
                      <Link
                        href={`/pages/locations/${location.slug}`}
                        className="block text-sm text-gray-700 hover:text-blue-600 py-0.5"
                      >
                        {location.name}
                      </Link>
                    </div>
                  ))
                ) : (
                  <p className="text-sm text-gray-500">Loading...</p>
                )}
              </div>
            )}
          </div>


          <Link 
  href="/pages/offers/" 
  className="nav-link font-normal text-[#747F8E] hover:text-blue-600 px-2 py-2" 
  style={{ fontFamily: "'Poppins', sans-serif", textDecoration: "none" }}
>
  Offers
</Link>

<Link 
  href="/pages/pricing/" 
  className="nav-link font-normal text-[#747F8E] hover:text-blue-600 px-2 py-2" 
  style={{ fontFamily: "'Poppins', sans-serif", textDecoration: "none" }}
>
  Price
</Link>

<Link 
  href="/pages/faq/" 
  className="nav-link font-normal text-[#747F8E] hover:text-blue-600 px-2 py-2" 
  style={{ fontFamily: "'Poppins', sans-serif", textDecoration: "none" }}
>
  FAQ's
</Link>

<Link 
  href="/pages/blog/" 
  className="nav-link font-normal text-[#747F8E] hover:text-blue-600 px-2 py-2" 
  style={{ fontFamily: "'Poppins', sans-serif", textDecoration: "none" }}
>
  Blog
</Link>
        </div>

        {/* WhatsApp Section */}
        <span onClick={handleClick}>
          <Link href={`https://wa.me/${phoneNumber}?text=${encodedMessage}`} target="_blank" rel="noopener noreferrer" className="text-left text-md">
            <div className="flex items-center space-x-1">
              <div className="flex">
                <img src="/whatsappQRcode.png" width={70} className="p-1" alt="WhatsApp QR Code" />
                <img src="/whatsappicon.png" width={70} alt="WhatsApp Icon" />
              </div>
              <div className="flex flex-col w-[220px]">
                <strong>Schedule a free pickup now</strong>
                <span>+971 58 9920080</span>
              </div>
            </div>
          </Link>
        </span>
      </div>
    </>
  );
};

export default DesktopNavbar;
