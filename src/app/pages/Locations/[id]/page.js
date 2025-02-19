import React from "react";
import LocationPage from "./mainpage";

export async function generateMetadata({ params }) {
  // Get the base URL from environment variables
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || "https://www.swabilaundry.ae";

  try {
    const res = await fetch(`${baseUrl}/api/locations/${params.id}`);
    
    if (!res.ok) {
      throw new Error("Failed to fetch location data");
    }

    const result = await res.json();

    // ✅ Extract the actual location data
    const location = result.data || {};

    console.log("-------------------------------------------------------------------------------------");
    console.log("meta title:", location.meta_title, "location keyword:", location.meta_keywords);

    // ✅ Return metadata
    return {
      title: location.meta_title || "Laundry Services in Dubai",
      description: location.meta_description || "Laundry Services in Dubai",
      keywords: location.meta_keywords || "Laundry Services in Dubai",
    };
  } catch (error) {
    console.error("Error fetching metadata:", error);

    // Return default metadata in case of an error
    return {
      title: "Laundry Services in Dubai",
      description: "Professional laundry services in Dubai with free pickup & delivery.",
      keywords: "laundry, dry cleaning, Dubai laundry service",
    };
  }
}



export default function Home({ params }) {
  return (
    <>
      <LocationPage id={params.id} />
    </>
  );
}
