import Head from "next/head";
import Navbar from "@/components/Header";
import AboveFooter from "@/components/abovefooter";
import React from "react";

const metadata = {
  title: "Contact Us | Swabi Laundry",
  description: "Get in touch with Swabi Laundry for inquiries, services, and support. Reach out via phone, email, or visit our location.",
  slug: "contact-us",
  siteUrl: "https://swabilaundry.ae/",
  image: "/images/og-contact-us.jpg",
  keywords: "contact Swabi Laundry, laundry service contact, dry cleaning support, customer service, laundry pickup",
  brandName: "Swabi Laundry",
  phone: "+971 50 123 4567",
  email: "support@swabilaundry.ae",
  address: "123 Laundry Street, Dubai, UAE",
  twitter: "https://x.com/swabi_laundry?s=21&t=SkkoBLyWW-JvW9TtFWg-Tg",
  favicon: "/favicon.ico",
};

export default function ContactUsPage() {
  const pageUrl = `${metadata.siteUrl}${metadata.slug}`;

  return (
    <>
      <Head>
        {/* Basic Meta Tags */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* SEO Meta Tags */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.brandName} />
        <meta name="robots" content="index, follow" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={`${metadata.siteUrl}${metadata.image}`} />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={metadata.twitter} />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={`${metadata.siteUrl}${metadata.image}`} />

        {/* Canonical Tag */}
        <link rel="canonical" href={pageUrl} />

        {/* Favicon */}
        <link rel="icon" href={metadata.favicon} type="image/x-icon" />

        {/* Schema Markup for Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": metadata.brandName,
              "url": metadata.siteUrl,
              "logo": `${metadata.siteUrl}/logo.png`,
              "description": metadata.description,
              "image": `${metadata.siteUrl}${metadata.image}`,
              "telephone": metadata.phone,
              "email": metadata.email,
              "address": {
                "@type": "PostalAddress",
                "streetAddress": metadata.address,
                "addressLocality": "Dubai",
                "addressCountry": "UAE",
              },
              "sameAs": [
                "https://facebook.com/swabilaundry",
                metadata.twitter,
                "https://instagram.com/swabilaundry",
              ],
            }),
          }}
        />
      </Head>

      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-center mb-6">Contact Us</h1>
        <p className="text-center text-gray-600 mb-10">
          Need assistance? Reach out to us and we'll be happy to help!
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Details */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <p><strong>Phone:</strong> <a href={`tel:${metadata.phone}`} className="text-blue-600">{metadata.phone}</a></p>
            <p><strong>Email:</strong> <a href={`mailto:${metadata.email}`} className="text-blue-600">{metadata.email}</a></p>
            <p><strong>Address:</strong> {metadata.address}, Dubai, UAE</p>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border border-gray-300 rounded-lg"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 border border-gray-300 rounded-lg"
                required
              />
              <textarea
                placeholder="Your Message"
                className="w-full p-3 border border-gray-300 rounded-lg"
                rows="4"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>


    </>
  );
}
