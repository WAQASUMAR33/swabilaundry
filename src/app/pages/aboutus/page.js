import Head from "next/head";
import Navbar from "@/components/Header";
import Productpropcomponent from "./components/productprop";
import Quote from "./components/quote";
import React from "react";
import ChoresComponent from "./components/chorecomponent";
import AboveFooter from "@/components/abovefooter";
import WhyChooseUs from "@/components/WhyChooseUs";

export const metadata = {
  title: "About Us | Swabi Laundry",
  description: "Learn more about Swabi Laundry, our mission, and how we provide top-notch laundry services.",
  siteUrl: "https://swabilaundry.ae",
  image: "/images/og-about-us.jpg",
  keywords: "laundry service, eco-friendly laundry, garment care, dry cleaning, about us",
  brandName: "Swabi Laundry",
  twitterHandle: "@swabi_laundry", // Use the Twitter handle, not the full URL
};

export default function AboutPage() {
  const pageUrl = `${metadata.siteUrl}/about-us`; // Construct the page URL dynamically

  return (
    <>
      <Head>
        {/* SEO Meta Tags */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.brandName} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={pageUrl} />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={`${metadata.siteUrl}${metadata.image}`} />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={metadata.twitterHandle} />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={`${metadata.siteUrl}${metadata.image}`} />

        {/* Schema Markup for Rich Results */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": metadata.brandName,
          "url": metadata.siteUrl,
          "logo": `${metadata.siteUrl}/logo.png`,
          "description": metadata.description,
          "image": `${metadata.siteUrl}${metadata.image}`,
          "sameAs": [
            "https://facebook.com/swabilaundry",
            `https://twitter.com/${metadata.twitterHandle.replace('@', '')}`, // Use the Twitter handle
            "https://instagram.com/swabilaundry"
          ]
        })}} />
      </Head>


      <Navbar/>
      <div style={{ marginTop: "150px" }}>
        <Productpropcomponent
          image="/propimg4.png"
          name="About Us - Swabi Laundry"
          title="Premium Laundry & Dry Cleaning Services in Dubai"
          description1="Welcome to Swabi Laundry, your trusted partner for professional laundry services and dry cleaning in Dubai. At Swabi Laundry, we pride ourselves on offering high-quality cleaning solutions designed to meet the needs of both individuals and businesses. We are dedicated to providing an exceptional laundry experience with eco-friendly practices and convenient services."
          description2="At Swabi Laundry, we offer affordable dry cleaning and laundry services in Dubai with a focus on quality and convenience. Our expert team uses eco-friendly cleaning products to ensure your clothes are cleaned with care. With free pick-up and delivery across Dubai, we make it easy to keep your clothes fresh and clean."
          align="right"
        />
      </div>

      <Productpropcomponent
        image="/propimg2.jpg"
        name="Our Story - Swabi Laundry"
        title="Established to Revolutionize Laundry Services"
        description1="Founded in 2020, Swabi Laundry began with a simple goal: to redefine laundry services in Dubai by offering high-quality, efficient, and eco-friendly cleaning solutions. We’ve grown from a small operation to a trusted name in the industry, with multiple locations offering premium dry cleaning and laundry services."
        description2="At Swabi Laundry, we believe in making a positive impact, not just through our services but also by embracing sustainability. Our team is committed to using green cleaning methods that reduce environmental impact while delivering exceptional results. From pick-up and delivery laundry services to professional garment care, we make sure your laundry experience is both convenient and environmentally responsible."
        description3=""
        align="left"
      />

      <Quote />

      <Productpropcomponent
        image="/propimg3.jpg"
        imageWidth="600px"
        name="Our Commitment – Swabi Laundry"
        title="Partnering with Local Experts for Superior Quality"
        description1="At Swabi Laundry, quality is at the heart of everything we do. We work closely with local experts to ensure that our laundry services meet the highest standards. From dry cleaning to eco-friendly laundry solutions, we only partner with facilities that share our dedication to excellence and customer satisfaction."
        description2="We believe in building strong relationships with trusted local providers who understand the needs of the community. This allows us to deliver consistent, top-notch services while maintaining a personal touch. Our goal is to make your laundry experience seamless and hassle-free, with the reliability and care you deserve."
     
        align="left"
      />
      <WhyChooseUs/>
      <ChoresComponent />
    </>
  );
}