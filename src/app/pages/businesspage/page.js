import Head from "next/head";
import AboveFooter from "@/components/abovefooter";
import React from "react";
import Businesscomponent from "./components/businessprop";
import BusinessTag from "./components/businesstag";

export const metadata = {
  title: "Business Page | Swabi Laundry",
  description: "Discover Swabi Laundry's professional laundry services tailored for businesses, hotels, offices, Airbnb, and more.",
  slug: "business",
  siteUrl: "https://www.swabilaundry.com",
  image: "/images/og-business.jpg",
  keywords: "laundry service, business laundry, Swabi Laundry, laundry in Dubai, professional laundry, dry cleaning, washing service, clothing care",
};

export default function BusinessPage() {
  const pageUrl = `${metadata.siteUrl}/${metadata.slug}`;

  return (
    <div className="mt-20">
      <Head>
        {/* Primary Meta Tags */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content="Swabi Laundry" />
        <link rel="canonical" href={pageUrl} />

        {/* Open Graph / Facebook Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={`${metadata.siteUrl}${metadata.image}`} />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={pageUrl} />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={`${metadata.siteUrl}${metadata.image}`} />
      </Head>

      <BusinessTag />
      <h1 className="text-6xl text-center font-bold my-10 pt-10">Our Services</h1>

      <Businesscomponent
        image="/businesspage/laurndryuniform.jpg"
        name="Laundry for uniforms"
        label="Uniforms Laundry Service"
        description="We process hundreds of thousands of items each week, so you can rely on our commercial laundry service for your uniforms no matter the size of your organization."
        align="left"
      />
      <Businesscomponent
        image="/businesspage/airbnb.webp"
        name="Laundry for Airbnb"
        label="Airbnb Laundry Service"
        description="Our on-demand service provides clean laundry for your Airbnb exactly when you need it. We can wash your own items or rent our clean linen and towels to you on-demand. Now you can focus on providing the best experience to your guests."
        align="right"
      />
      <Businesscomponent
        image="/businesspage/hotel.jpg"
        name="Laundry for your hotel"
        label="Hotel Laundry Service"
        description="Partner with us and offer great laundry service to your guests. If you are a hotel, service apartments, or an Airbnb host, we offer overnight laundry and dry cleaning services to your guests while you earn a commission."
        align="left"
      />
      <Businesscomponent
        image="/businesspage/cafeandresturants.avif"
        name="Laundry for cafes and restaurants"
        label="Cafes and Restaurants Laundry Service"
        description="Our cafe and restaurant laundry service offers quick turnaround and excellent cleaning for your business needs. We work on your schedule and deliver great cleaning for table cloths, uniforms, napkins, kitchen cloths, and more."
        align="right"
      />
      <Businesscomponent
        image="/businesspage/office.jpg"
        name="Laundry for your office"
        label="Office Laundry Service"
        description="We provide a custom solution for your office laundry and dry cleaning needs. Make our service available to your employees, ensure clean towels for your shower facility, or clean your swag after an event."
        align="left"
      />
      <Businesscomponent
        image="/businesspage/business.jpg"
        name="Laundry for your business"
        label="Business Laundry Service"
        description="Focus on the more important parts of your business while we take care of the laundry. It's an ideal solution for hairdressers, beauty and spa salons, or anyone that needs laundry done."
        align="right"
      />

      <br/>
    </div>
  );
}
