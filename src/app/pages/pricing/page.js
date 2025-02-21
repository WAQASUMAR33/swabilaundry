"use client";
import Head from "next/head";
import React from "react";
import FAQSection from "./components/FAQsection";
import PricingSection from "./components/pricingseciton";
import AboveFooter from "@/components/abovefooter";
import PricingTag from "./components/tag2";
import metadata from "./metadata";  // Import metadata

export default function Pricing() {
  const pageUrl = `${metadata.siteUrl}/${metadata.slug}`; // Now correctly points to swabilaundry.ae

  return (
    <>
      <Head>
        {/* Primary SEO Meta Tags */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <link rel="canonical" href={pageUrl} />

        {/* Open Graph / Facebook Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:image:width" content={metadata.openGraph.images[0].width} />
        <meta property="og:image:height" content={metadata.openGraph.images[0].height} />
        <meta property="og:image:alt" content={metadata.openGraph.images[0].alt} />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.openGraph.title} />
        <meta name="twitter:description" content={metadata.openGraph.description} />
        <meta name="twitter:image" content={metadata.openGraph.images[0].url} />

        {/* Schema Markup for SEO (Structured Data) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": metadata.title,
            "description": metadata.description,
            "url": pageUrl,
            "image": metadata.openGraph.images[0].url,
            "provider": {
              "@type": "Organization",
              "name": "Swabi Laundry",
              "url": metadata.siteUrl
            }
          })}
        </script>
      </Head>

      <PricingTag />
      <PricingSection />
      <FAQSection />

    </>
  );
}
