"use client"; // Mark this as a Client Component

import Head from "next/head";
import AboveFooter from "@/components/abovefooter";
import Navbar from "@/components/Header";
import React from "react";
import FAQTag from "./components/faqtag";
import FAQ from "./components/Faqsection";
import ServiceLocations from "./components/ServiceLocations";
import { metadata } from "./metadata"; // Import metadata from the separate file

export default function FAQPage() {
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

      <FAQTag />
      <FAQ />
      <ServiceLocations />
      <br />
    
    </div>
  );
}