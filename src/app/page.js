// pages/index.js
import AboveFooter from "@/components/abovefooter";
import Benefits from "@/components/Benefits";
import Hero from "@/components/Herosection";
import HowItWorks from "@/components/HowItsWorks";
import LaundryServices from "@/components/laundryservices";
import OrderForm from "@/components/orderform";
import Productpropcomponent from "@/components/productprop";
import Testimonials from "@/components/testimonial";
import WhyChooseUs from "@/components/WhyChooseUs";
import Script from 'next/script';
import Navbar from "@/components/DesktopNavbar";

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
      <Navbar />
      <Hero />
      
       <LaundryServices />
       <OrderForm />
       <WhyChooseUs/>
      <Benefits />
      <HowItWorks/>
      <Productpropcomponent
      benefit="Swabi Laundry"
      image="/propimg4.png"
      title="Effortless Laundry Service – Fresh, Clean & Delivered to Your Door"
      description1="Tired of laundry piling up? We make it easy with fast, reliable pickup and delivery services right to your doorstep. Our professional team handles everything from wash & fold, dry cleaning, stain removal, and delicate fabric care, using eco-friendly detergents that are safe for your clothes and the environment. Whether it’s business attire, casual wear, or specialty items like leather shoes and curtains, we ensure meticulous cleaning, expert care, and a hassle-free experience. With same-day service options and flexible scheduling, getting your laundry done has never been more convenient."
      description2="At Swabi Laundry, we go beyond just cleaning—we revive, refresh, and restore your garments to perfection. Our gentle yet powerful stain treatments, deep fabric conditioning, and odor removal techniques keep your clothes looking and feeling new for longer. We specialize in premium fabric care, professional pressing, and long-lasting freshness, so you always step out with confidence. Say goodbye to laundry stress and enjoy more free time while we handle the rest—because clean clothes should be effortless!"
      align="left"
/>
      <Testimonials />
    
      <AboveFooter /> 
    </div>
  );
}
