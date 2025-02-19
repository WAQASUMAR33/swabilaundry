import React from "react";
import CompanyDetail from "./mainpage";

export async function generateMetadata({ params }) {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

  try {
    const res = await fetch(`${baseUrl}/api/subcategories/${params.id}`, { cache: 'no-store' });
    
    if (!res.ok) {
      console.error('Failed to fetch subcategory data:', res.status, res.statusText);
      return { title: 'Subcategory Not Found' }; // Fallback Metadata
    }

    const result = await res.json();
    const subcategory = result.data;

    return {
      title: subcategory?.meta_title || subcategory?.name || 'Laundry Services',
      description: subcategory?.meta_description || '',
      keywords: subcategory?.meta_keywords || '',
    };
  } catch (error) {
    console.error('Error in generateMetadata:', error);
    return { title: 'Error Loading Page' }; // Fallback title
  }
}

export default function Home({ params }) {
  return (
    <>
      <CompanyDetail id={params.id} />
    </>
  );
}
