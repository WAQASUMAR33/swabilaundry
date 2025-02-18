// pages/index.js
import HomePage from "@/app/home/page";


export const metadata = {
  title: "SwabiLaundry - Premium Laundry & Dry Cleaning Services",
  description: "SwabiLaundry offers premium laundry & dry cleaning services. Quality care for your garments. Convenient, reliable, and tailored to your needs. Book now!",
  googleSiteVerification: "u5ilm-FmCTEczbpWodYx_fVQLFMWDRgiqHcPJlifo",
  keywords: "Swabi Laundry, laundry services, dry cleaning, ironing, home laundry service, online laundry booking",
  author: "Swabi Laundry",

  openGraph: {
    title: "Home | Swabi Laundry",
    description: "Professional laundry services in your area. Book online for convenient and reliable service.",
    url: "https://www.swabilaundry.ae",
    type: "website",
    images: [
      {
        url: "https://www.swabilaundry.com/og-image.jpg",
        width: 800,
        height: 600,
        alt: "Swabi Laundry",
      },
    ],
  },
};

export default function Home() {
  return (
    <div className="w-full">
      <head>
        
        <meta name="google-site-verification" content={metadata.googleSiteVerification} />
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
      </head>

      {/* Google Tag Manager */}
      {/* <Script id="google-tag-manager" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-PQSZLRC6');
        `}
      </Script> */}
      {/* End Google Tag Manager */}

      {/* Google Analytics */}
     
     

      {/* Google Ads */}
  
      {/* <Script id="google-ads-script" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-11228899050');
        `}
      </Script> */}

      <title>{metadata.title}</title>
      <HomePage/>
    </div>
  );
}
