import React from "react";
import BlogDetailPage from "./mainpage"; // Ensure you are importing the correct component

export async function generateMetadata({ params }) {
  const baseUrl = 'http://localhost:3000';
  // const baseUrl = 'http://localhost:3000';
  
  try {
    const res = await fetch(`${baseUrl}/api/blog/${params.id}`);
    
    if (!res.ok) {
      console.error(`Error: ${res.status} ${res.statusText}`);
      throw new Error('Failed to fetch blog data');
    }

    const blog = await res.json();

    // Return metadata with the fetched blog title and description
    return {
      title: blog.title || 'Swabi Laundry',
      description: blog.description || 'Best Laundry Website',
      keywords: blog.meta_focusKeyword || "Best Laundry Website , Laundry Near me , Top Laundry and Dry Cleaning Services"
    };
  } catch (error) {
    console.error('Error fetching swabi laundry data:', error);

    // Provide fallback metadata in case of an error
    return {
      title: 'Swabi Laundry',
      description: 'Best Laundry website',
      keywords: 'Laundry blogs keyword'
    };
  }
}

export default function Home({ params }) {
  return (
    <>
      <BlogDetailPage id={params.id} />
    </>
  );
}
