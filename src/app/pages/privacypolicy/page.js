import React from "react";
import Contentsection from "./components/Contentsection";
import AboveFooter from "@/components/abovefooter";

import PrivacyTag from "./components/privacytag";

export const metadata = {
  title: "Privacy Policy | Swabi Laundry",
  description: "Understand how Swabi Laundry prioritizes your privacy. Read our detailed Privacy Policy to learn how we protect your personal data while delivering reliable and affordable laundry services",
  keywords: "Privacy policy, data protection, personal information, user privacy, data security, information collection, privacy terms, secure data usage, customer privacy rights, online privacy, confidentiality policy, data sharing practices, privacy compliance, data retention, GDPR policy",
  author: "Swabi Laundry",
  openGraph: {
    title: "Privacy Policy | Swabi Laundry",
    description: "Understand how Swabi Laundry prioritizes your privacy. Read our detailed Privacy Policy to learn how we protect your personal data while delivering reliable and affordable laundry services",
    url: "https://www.swabilaundry.com/privacypolicy",
    type: "website",
    images: [
      {
        url: "https://www.swabilaundry.com/og-image-pricing.jpg",
        width: 800,
        height: 600,
        alt: "Swabi Laundry Privacy Policy",
      },
    ],
  },
};

export default function privacyPolicy() {
  return (
    <>
      <head>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:image:width" content={metadata.openGraph.images[0].width} />
        <meta property="og:image:height" content={metadata.openGraph.images[0].height} />
        <meta property="og:image:alt" content={metadata.openGraph.images[0].alt} />
        <title>{metadata.title}</title>
      </head>
      <PrivacyTag/>
      <Contentsection />
     
      <AboveFooter />
    </>
  );
}
