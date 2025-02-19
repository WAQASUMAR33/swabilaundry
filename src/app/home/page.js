import React from "react";
import HPage from "./homepage";


const BASE_IMAGE_URL = process.env.NEXT_PUBLIC_UPLOADED_IMAGE_URL;


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
    

    export default function Home({ params }) {
      return (
        <>
          <HPage />
        </>
      );
    }