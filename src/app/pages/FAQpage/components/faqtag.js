
import React from 'react';

function FAQTag() {
  return (
    <div className="slide-container md:mt-[140px] mt-20 text-black bg-[url('/faqtag.webp')] bg-fixed h-[300px] bg-cover flex items-center">
      <div className="text-black bg-cover flex items-center w-full bg-blue-400 bg-opacity-60 h-full">
        <div className="mx-auto p-10 text-center">
          <h1 className="text-6xl lg:text-8xl font-bold text-white mb-4">FAQ</h1>
          <p className="text-lg lg:text-xl text-white max-w-2xl mx-auto">
            Find answers to frequently asked questions about Swabi Laundry's services, including wash and fold, dry cleaning, eco-friendly practices, and more. We’re here to make laundry simple and convenient for you!
          </p>
        </div>
      </div>
    </div>
  );
}

export default FAQTag;