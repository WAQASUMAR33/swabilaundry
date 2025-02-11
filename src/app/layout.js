import "./globals.css";
import Navbar from "@/components/Header";
import WhatsAppButton from "@/components/whatsappbutton";
import Script from 'next/script';
import Head from 'next/head';
import { GoogleTagManager } from '@next/third-parties/google';
import { GoogleAnalytics } from '@next/third-parties/google'


export const metadata = {
  title: "SwabiLaundry - Premium Laundry & Dry Cleaning Services",
  description: "SwabiLaundry offers premium laundry & dry cleaning services. Quality care for your garments. Convenient, reliable, and tailored to your needs. Book now!",
  googleSiteVerification: "u5ilm-FmCTEczbpWodYx_fVQLFMWDRgiqHcPJlifo" // Add your verification code here
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <GoogleTagManager gtmId="GTM-PQSZLRC6" /> 
       <Head>
         <title>{metadata.title}</title>
         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />

     
     
        <link rel="icon" href="/favicon.ico" />
        {/* Global Site Tag (gtag.js) - Google Ads */}
        <Script id="google-ads-script" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-11228899050');
          `}
        </Script>

        {/* <Script>(function(w,d,s,l,i){`
          w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        `})(window,document,'script','dataLayer','GTM-PQSZLRC6');</Script> */}


         {/* <script async src="https://www.googletagmanager.com/gtag/js?id=AW-11228899050"></script>  */}
          {/* <script> 
            {` window.dataLayer= window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js',new Date()); gtag('config', 'AW-11228899050');`}
           </script> */}


        {/* <Script id='fb-pixel' strategy='afterInteractive'>
            {`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '796676856006134');
              fbq('track', 'PageView');
              <noscript><img height="1" width="1" style="display:none"
              src="https://www.facebook.com/tr?id=796676856006134&ev=PageView&noscript=1"
              /></noscript>
            `}
          </Script> */}
      </Head>
      <body>

       {/* <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PQSZLRC6"
       height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
 */}


        <div className="fixed-navbar">
        
          <WhatsAppButton />
          {/* <OfferDialog 
            googleMapsUrl="https://maps.app.goo.gl/owFNrAMn1L1z8WJHA"
            locationName="Swabi Laundry and Dry Cleaning Service"
          /> */}
        </div>
        <div>{children}</div>
      </body>

      <GoogleAnalytics gaId="AW-11228899050" />
    </html>
  );
}
