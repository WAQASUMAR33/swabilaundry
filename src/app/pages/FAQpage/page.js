// pages/faq.js
import React from 'react';
import Head from 'next/head';
import FaqSection from './components/Faqsection';
import OrderForm from '../../../components/orderform';
import WhyChooseUs from '../../../components/WhyChooseUs';

const FAQ = () => {
  return (
    <>
      <Head>
        <title>FAQ - Swabi Laundry</title>
        <meta name="description" content="Frequently Asked Questions about Swabi Laundry. Learn more about our services, policies, and how we can help you." />
      </Head>

      <div className=' pt-20'></div>
      <div className="bg-gray-100 py-8 md:py-12">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          {/* <div className="text-center mb-8 md:mb-12">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">Frequently Asked Questions</h1>
          </div> */}
          <FaqSection />
          {/* Additional Sections */}
          <WhyChooseUs />
          <OrderForm />
        
        </div>
      </div>
    </>
  );
};

export default FAQ;
