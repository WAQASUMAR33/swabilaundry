import React from "react";
import CategoryPage from "./Mainpage";

export async function generateMetadata({ params }) {
  const baseUrl = 'https://www.swabilaundry.ae'; // Base URL for API calls
    return {
      title: 'Explore Categories - Best Coupons & Deals by Category | Swabi Laundry',
      description: 'Browse all shopping categories at Swabi Laundry and find the best coupons, promo codes, and deals. Save on every category, from fashion to laundry and more!',
      // keywords: 'Swabi Laundry blogs keyword',
      alternates: {
        canonical: `${baseUrl}/categories`,
      },
      openGraph: {
        title: "Explore Categories - Best Coupons & Deals by Category | Swabi Laundry",
        description: "Browse all shopping categories at swabi laundry and find the best coupons, promo codes, and deals. Save on every category, from fashion to laundry and more!",
        url: 'https://www.swabilaundry.ae/categories',
        siteName: "swabilaundry",
        type: 'website',
        images: [
          {
            url: 'https://www.swabilaundry.ae/logo/logo2.jpg',
            secureUrl: 'https://www.swabilaundry.ae/logo/logo2.jpg',
            alt: 'Preview image for swabilaundry',
          }
        ]
      },
      twitter: {
        card: 'summary_large_image',
        site: '@swabilaundry',
        title: "Explore Categories - Best Coupons & Deals by Category | Swabi Laundry",
        description: "Browse all laundry categories at swabilaundry and find the best coupons, promo codes, and deals. Save on every category, from laundry to dry cleaning and more!",
        creator: '@swabilaundry',
        images: {
          url: 'https://www.swabilaundry.com/logo/logo2.jpg',
          alt: 'Preview image for swabilaundry',
        }
      },
    }
  }

export default function MainStorePage({ params }) {
  return (
    <>
     <CategoryPage params={params}/>
    </>
  );
}

   