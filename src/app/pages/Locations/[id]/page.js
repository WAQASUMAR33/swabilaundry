import React from "react";
import LocationPage from "./mainpage";

export async function generateMetadata({ params }) {
  // Get the base URL from environment variables
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || "https://www.swabilaundry.ae";

  // const baseUrl = 'http://localhost:3000';

  const res = await fetch(`${baseUrl}/api/locations/${params.id}`);
  if (!res.ok) {
    throw new Error('Failed to fetch company data');
  }
  const result = await res.json();
  const location  = result;
  
  console.log("-------------------------------------------------------------------------------------");
  console.log("meta title", location.meta_title,"location keyword", location.meta_keywords);

  // Return metadata with the fetched company title and description
  return {
    title: location.meta_title || 'Services Swabi Laundry',
    description: location.meta_description || 'Best Laundry Services website',
    keywords: location.meta_keywords || 'keywords',
  };
}


export default function Home({ params }) {
  return (
    <>
      <LocationPage id={params.id} />
    </>
  );
}
