'use client';
import React, { useEffect, useState } from "react";
import { RxGlobe } from "react-icons/rx";
import { MdKeyboardArrowDown, MdCopyright } from "react-icons/md";
import { FaFacebook, FaEnvelope, FaTiktok, FaInstagram, FaTwitter, FaPinterest } from 'react-icons/fa';
import Link from 'next/link';
import axios from "axios";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from 'next/image';

const Footer = () => {


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



  const [socialMediaLinks, setSocialMediaLinks] = useState({
    facebook: '',
    instagram: '',
    twitter: '',
    tiktok: '',
    pinterest: ''
  });

  const [loading, setLoading] = useState(true);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    const fetchSocialMediaLinks = async () => {
      try {
        const response = await fetch(`/api/socialfirstrecodlink/2`);
        const data = await response.json();
        if (data.status) {
          setSocialMediaLinks(data.data);
        } else {
          console.error('Failed to fetch social media links');
        }
      } catch (error) {
        console.error('Error fetching social media links:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchSocialMediaLinks();
  }, []);

  const [companyemail, setcompanyemail] = useState('');
  const [companyphone, setcompanyphone] = useState('');
  const [companyaddress, setcompanyaddress] = useState('');

  useEffect(() => {
    async function fetchContactInfo() {
      try {
        const response = await axios.get('/api/contactinfo');
        if (Array.isArray(response.data) && response.data.length > 0) {
          const existingContact = response.data[0];
          setcompanyemail(existingContact.email);
          setcompanyphone(existingContact.phoneNumber);
          setcompanyaddress(existingContact.address);
        }
      } catch (error) {
        console.error('Error fetching contact info:', error);
      }
    }
    fetchContactInfo();
  }, []);

  return (
    <>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
        }}
        className="grid grid-cols-2  sm:grid-cols-2 lg:grid-cols-5 gap-6 px-4 md:px-10 lg:px-20 py-16 border-t-2 border-b-2 text-gray-800 bg-gray-50"
      >
        {/* Company Info - Wider Column */}
         <motion.div className="flex flex-col gap-4 col-span-2 sm:col-span-2 lg:col-span-2">
          {/* Title and Logo Container */}
          <div className="flex items-center gap-3">
          
            <Link href="/" legacyBehavior>
              <a className="hover:scale-105 transition-transform">
                <Image width={80} height={60} src='/swabi logo.png' className="cursor-pointer" alt="Footer Logo" />
              </a>
             
            </Link>

            <p className="text-[36px] font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Swabi Laundry
            </p>
          </div>

          {/* Description */}
          <p className="text-[15px] font-medium text-justify leading-relaxed">
            Swabi Laundry provides top-quality laundry, dry cleaning, and ironing services in Dubai with free pickup & delivery. Enjoy fast, affordable, and eco-friendly fabric care for your clothes, bedding, and more. We specialize in stain removal, delicate garment care, and commercial laundry solutions. Serving All of Dubai | Book Your Laundry Service Today!
          </p>
        </motion.div>

        {/* Explore Section */}
        <motion.div className="flex flex-col gap-2 sm:col-span-1 lg:col-span-1">
          <p className="text-[24px] font-bold">Quick Links</p>
          {['HomePage', 'About Us', 'Pricing', 'Contact Us', 'Offers', 'Blog'].map((item, index) => (
            <Link key={index} href={`/pages/${item.replace(/\s+/g, '').toLowerCase()}`}>
              <p className="text-[15px] font-medium hover:text-blue-500 transition-colors cursor-pointer">{item}</p>
            </Link>
          ))}
        </motion.div>

        {/* Company Pages */}
        <motion.div className="flex flex-col gap-2 sm:col-span-1 lg:col-span-1">
          <p className="text-[24px] font-bold">Help & Information</p>
          {['Shipping Policy', 'Refund Policy', 'Privacy Policy', 'Terms & Conditions', 'FAQs'].map((item, index) => (
            <Link key={index} href={`/pages/${item.replace(/\s+/g, '').toLowerCase()}`}>
              <p className="text-[15px] font-medium hover:text-blue-500 transition-colors cursor-pointer">{item}</p>
            </Link>
          ))}
        </motion.div>

        {/* Support Section */}
        <motion.div className="flex flex-col gap-2 lg:col-span-1 sm:col-span-1">
         <p className="text-[24px] font-bold">Support</p>
            <p className="text-[15px] font-medium">Email: {companyemail}</p>

            <span className="group">
              <Link href="https://wa.me/971589920080?text=Hi Swabi Laundry team. I would like to know about the pricing, service, and want to schedule a free pickup.">
                <p className="text-[15px] font-medium transition-all duration-300 group-hover:text-green-500 group-hover:scale-105 cursor-pointer">
                  Phone: {companyphone}
                </p>
              </Link>
            </span>

<p className="text-[15px] font-medium">Address: {companyaddress}</p>

         

        <div className="flex justify-start gap-2 text-gray-800">
              <div className='hover:text-black'>

                <a href='https://www.facebook.com/profile.php?id=100092439295566&mibextid=LQQJ4d'>
                  <FaFacebook className="text-3xl" />
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
                <FaTiktok className="text-3xl" />
              </div>
            </div>
        


            <div>
              <div className="text-center  mt-2">
                <div className="flex flex-row justify-center items-center space-x-4 py-4">
                  <img src="/customlogo/image.png" className="w-[80px] object-cover" alt="Women Owned Business Logo" />
                  <img src="/customlogo/image1.png" className="w-[80px] object-contain" alt="Made in UAE Logo" />
                </div>
              </div>
            </div>
        </motion.div>
      </motion.div>

      {/* Bottom Footer Bar */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="flex flex-col md:flex-row justify-between items-center flex-wrap p-6 text-gray-800 bg-gray-100"
      >
        <div className="flex items-center gap-2 border-2 p-2 rounded-md cursor-pointer hover:bg-gray-200 transition-colors">
          <RxGlobe className="text-[20px]" />
          <p className="text-[15px]">English (Dubai)</p>
          <MdKeyboardArrowDown className="text-[20px]" />
        </div>
        <div className="text-center text-[14px] font-medium">
          <MdCopyright className="inline-block" /> 2024 All Rights Reserved | Privacy Policy | Terms
        </div>
      </motion.div>
    </>
  );
};

export default Footer;