"use client";
import Head from "next/head";
import AboveFooter from "@/components/abovefooter";
import React, { useState, useEffect } from "react";
import OffersTag from "./components/tag";
import Offerscards from "./components/offerscards";
import Modal from "./components/Modal";
import metadata from "./metadata"; // Import metadata

export default function Offers() {
  const pageUrl = `${metadata.siteUrl}/${metadata.slug}`;

  const [activeCard, setActiveCard] = useState(null);
  const [modalImage, setModalImage] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (activeCard !== null) {
      const timer = setTimeout(() => {
        setActiveCard(null);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [activeCard]);

  const handleCardClick = (imageSrc) => {
    setModalImage(imageSrc);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalImage(null);
  };

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
        <meta name="twitter:url" content={pageUrl} />
        <meta name="twitter:title" content={metadata.openGraph.title} />
        <meta name="twitter:description" content={metadata.openGraph.description} />
        <meta name="twitter:image" content={metadata.openGraph.images[0].url} />

        {/* Schema Markup for SEO (Structured Data) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "OfferCatalog",
            "name": metadata.title,
            "description": metadata.description,
            "url": pageUrl,
            "image": metadata.openGraph.images[0].url,
            "provider": {
              "@type": "Organization",
              "name": "Swabi Laundry",
              "url": metadata.siteUrl,
            },
            "offers": [
              {
                "@type": "Offer",
                "name": "Discounted Laundry Services",
                "priceCurrency": "AED",
                "availability": "https://schema.org/InStock",
              },
            ],
          })}
        </script>
      </Head>

      <OffersTag />
      <div className="container mx-auto px-10">
        <div>
          <h1 className="text-center text-4xl font-bold pt-10">Current Offers</h1>
          <p className="text-center text-lg font-thin md:w-[1200px] mx-auto py-10">
            Take advantage of our daily/weekly ongoing offers for your laundry needs. Enjoy premium laundry services at amazing prices.
          </p>
        </div>

        <div className="grid md:grid-cols-3 md:gap-[60px] gap-10 md:px-40">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Offerscards
              key={i}
              imageSrc={`/offers/offer (${i}).jpg`}
              imageAlt={`Laundry Offer ${i} - Swabi Laundry`}
              isActive={activeCard === i}
              onClick={handleCardClick}
            />
          ))}
        </div>
      </div>

      <Modal show={showModal} onClose={closeModal} imageSrc={modalImage} />

      <br />
      <AboveFooter />
    </>
  );
}
