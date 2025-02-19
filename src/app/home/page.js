'use client'
import React, { useState, useEffect } from 'react';
import AboveFooter from "@/components/abovefooter";
import Benefits from "@/components/Benefits";
import Hero from "@/components/Herosection";
import HowItWorks from "@/components/HowItsWorks";
import LaundryServices from "@/components/laundryservices";
import OrderForm from "@/components/orderform";
import Productpropcomponent from "@/components/productprop";
import Testimonials from "@/components/testimonial";
import WhyChooseUs from "@/components/WhyChooseUs";
import Navbar from "@/components/DesktopNavbar";

const BASE_IMAGE_URL = process.env.NEXT_PUBLIC_UPLOADED_IMAGE_URL;

async function fetchHomepageData() {
  const response = await fetch('/api/homepage/1');
  if (!response.ok) {
    throw new Error('Failed to fetch homepage data');
  }
  return response.json();
}

export default function Page() {
  const [homepageData, setHomepageData] = useState(null);

  useEffect(() => {
    async function loadData() {
      try {
        const data = await fetchHomepageData();
        setHomepageData(data);
      } catch (error) {
        console.error('Error fetching homepage data:', error);
      }
    }
    loadData();
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <LaundryServices />
      <OrderForm />
      <WhyChooseUs />
      <Benefits />
      <HowItWorks />

      {homepageData && (
        <>
          <Productpropcomponent
            image={`https://swabiapp.rapidtechpro.com/uploads/${homepageData.img1}`}
            heading={homepageData.heading1}
            content={homepageData.content1}
            align="left"
          />
          <Productpropcomponent
            image={`https://swabiapp.rapidtechpro.com/uploads/${homepageData.img2}`}
            heading={homepageData.heading2}
            content={homepageData.content2}
            align="right"
          />
          <Productpropcomponent
            image={`https://swabiapp.rapidtechpro.com/uploads/${homepageData.img3}`}
            heading={homepageData.heading3}
            content={homepageData.content3}
            align="left"
          />
          <Productpropcomponent
            image={`https://swabiapp.rapidtechpro.com/uploads/${homepageData.img4}`}
            heading={homepageData.heading4}
            content={homepageData.content4}
            align="right"
          />
        </>
      )}

      <Testimonials />
      <AboveFooter />
    </>
  );
}

// ✅ Generate Metadata Dynamically
    export async function generateMetadata() {
      // Ensure metadata is always fetched dynamically
      const baseUrl = process.env.NEXT_PUBLIC_API_URL || "https://www.swabilaundry.ae";
    
      try {
        const response = await fetch(`${baseUrl}/api/homepage/1`, {
          cache: "no-store", // Ensures fresh data on each request
        });
    
        if (!response.ok) {
          throw new Error("Failed to fetch metadata");
        }
    
        const data = await response.json(); // API returns the metadata directly
    
        return {
          title: data.meta_title || "Premium Laundry Services in Dubai & Dry Cleaning Services in Greece Cluster | SwabiLaundry",
          description: data.meta_description || "SwabiLaundry offers premium laundry & dry cleaning services. Quality care for your garments. Convenient, reliable, and tailored to your needs. Book now!",
          keywords: data.meta_keywords || "Premium Laundry Services in Dubai, Dry Cleaning Services in Greece Cluster, SwabiLaundry",
        };
      } catch (error) {
        console.error("Error fetching metadata:", error);
    
        return {
          title: "Premium Laundry Services in Dubai & Dry Cleaning Services in Greece Cluster | SwabiLaundry",
          description: "SwabiLaundry offers premium laundry & dry cleaning services. Quality care for your garments. Convenient, reliable, and tailored to your needs. Book now!",
          keywords: "Premium Laundry Services in Dubai, Dry Cleaning Services in Greece Cluster, SwabiLaundry",
        };
      }
    }
    

