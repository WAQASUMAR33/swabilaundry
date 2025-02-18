"use client"
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import Link from 'next/link';
import { sendGTMEvent } from '@next/third-parties/google'

const AboveFooter = () => {
  const whatsappNumber = "971589920080";

  const generateWhatsAppLink = (service) => {
    const message = `Hi Swabi Laundry team. I would like to know about the pricing, service, and want to schedule a free pickup.`;
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  };


  const handleClick = () => {
    // Perform your desired actions here
    // For example, sending a GTM event
    sendGTMEvent({ event: 'whatsappclick', value: 'xyz' });

    // You can also perform other actions like logging
    console.log('WhatsApp link clicked');
  };

  return (
    <div className="container mt-[50px] px-2 lg:px-5 md:py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-2">
        <div className="text-left col-span-2">
          <div className="space-y-4  md:mr-6">
            <a href="/" className="text-body-main flex">
              <img src='/swabi logo.png' className='w-[100px]' alt='Swabi Logo'></img>
              <img src='/swabi text.png' className='w-[100px] h-[50px] my-auto' alt='Swabi Text'></img>
            </a>
            <p className="text-base md:text-lg text-gray-600">We provide top-quality laundry, dry cleaning, and ironing services in Dubai with free pickup & delivery. Enjoy fast, affordable, and eco-friendly fabric care for your clothes, bedding, and more. We specialize in stain removal, delicate garment care, and commercial laundry solutions.

Serving All of Dubai | Book Your Laundry Service Today!.</p>
          </div>
        </div>

        <div className="text-left w-full lg:w-auto lg:col-span-1">
          <h5 className="text-xl font-semibold mb-4">Our Services</h5>
          <div className="grid grid-cols-1 gap-3">
            {['Dry Cleaning', 'Daily Wear', 'Wash & Fold', 'Household Items', 'Wedding Dresses', 'Outerwear', 'Alterations', 'Shoes'].map(service => (
              <a key={service} href={generateWhatsAppLink(service)} className="text-body-main block hover:text-blue-500">
                {service}
              </a>
            ))}
          </div>
        </div>


        <div className="text-left md:ml-4">
          <h5 className="text-xl font-semibold mb-4">Links</h5>
          <div className="space-y-2">
            <a href="/" className="text-body-main block hover:text-blue-500">Home</a>
            <a href="/pages/aboutus" className="text-body-main block hover:text-blue-500">About Us</a>
            <a href="/pages/offers" className="text-body-main block hover:text-blue-500">Offers</a>
            <a href="/pages/pricing" className="text-body-main block hover:text-blue-500">Our Pricing</a>
            <a href="/pages/privacypolicy" className="text-body-main block hover:text-blue-500">Privacy Policy</a>
            <a href="/pages/termsandconditions" className="text-body-main block hover:text-blue-500">Terms & Conditions</a>
          </div>
        </div>

        <div className="text-left">
          <h5 className="text-xl font-semibold mb-4">Contact Us</h5>
          <div className='flex flex-row'>
            <a href="https://wa.me/971589920080?text=Hi Swabi Laundry team. I would like to know about the pricing, service, and want to schedule a free pickup." className='flex flex-row'>
              <div>
                <img src='/whatsappicon.png' width={60} alt="WhatsApp Icon"></img>
              </div>
              <div className='flex flex-col pl-3 my-auto'>

                <span onClick={handleClick}>
                  <Link href="https://wa.me/971589920080?text=Hi Swabi Laundry team. I would like to know about the pricing, service, and want to schedule a free pickup." className="">
                    Have a query?
                  </Link>
                  </span>

                  <span onClick={handleClick}>
                    <Link
                      href="https://wa.me/971589920080?text=Hi Swabi Laundry team. I would like to know about the pricing, service, and want to schedule a free pickup."
                      className=""
                      passHref>
                      +971 58 9920080
                    </Link>
                  </span>
               
              </div>
            </a>
          </div>
          <div className="md:p-4 py-4">
            <h5 className="text-xl font-semibold mb-4">Follow Us</h5>
            <div className="flex justify-start gap-2 text-gray-800">
              <div className='hover:text-black'>

                <a href='https://www.facebook.com/profile.php?id=100092439295566&mibextid=LQQJ4d'>
                  <FaFacebookF className="text-3xl" />
                </a>
              </div>
              <div className='hover:text-black'>
                <a></a>
                <FaTwitter className="text-3xl" />
              </div>
              <div className='hover:text-black'>
                <a href='https://www.instagram.com/swabi.laundry?igsh=MTB3cmF4azFtcGkzdA%3D%3D&utm_source=qr'>
                  <FaInstagram className="text-3xl" />
                </a>
              </div>
              <div className='hover:text-black'>
                <FaLinkedinIn className="text-3xl" />
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="text-center">
            <div className="flex md:flex-col flex-row justify-between items-center space-y-4">
              <img src="/customlogo/image.png" className="w-[100px] object-cover" alt="Women Owned Business Logo" />
              <img src="/customlogo/image1.png" className="w-[140px] object-contain" alt="Made in UAE Logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboveFooter;
