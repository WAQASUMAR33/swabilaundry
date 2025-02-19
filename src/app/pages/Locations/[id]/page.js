import React from "react";
import LocationPage from "./mainpage";

export async function generateMetadata({ params }) {
  // Ensure metadata is always fetched dynamically
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || "https://www.swabilaundry.ae";

  try {
    const res = await fetch(`${baseUrl}/api/locations/${params.id}`, {
      cache: "no-store", // ✅ Prevents caching issues in production
      next: { revalidate: 0 }, // ✅ Forces re-fetching on every request
    });

    if (!res.ok) {
      throw new Error("Failed to fetch location data");
    }

    const result = await res.json();

    // ✅ Extract the actual location data
    const location = result.data || {};

    console.log("-------------------------------------------------------------------------------------");
    console.log("Meta Title:", location.meta_title, "Meta Keywords:", location.meta_keywords);

    return {
      title: location.meta_title || "Laundry Services in Dubai",
      description: location.meta_description || "Laundry Services in Dubai",
      keywords: location.meta_keywords || "Laundry Services in Dubai",
    };
  } catch (error) {
    console.error("Error fetching metadata:", error);

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
