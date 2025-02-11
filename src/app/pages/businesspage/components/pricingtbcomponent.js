// components/PricingLayout.js
import React from 'react';
import PricingTable from './pricingtable';

const PricingLayout = () => {
  return (
    <div className="container mx-auto p-6 md:p-10">
        <h1 className='text-center text-4xl font-bold'>Pricing Table</h1>
      <div className="flex flex-col mt-16 justify-center gap-6 lg:gap-10 lg:flex-row lg:space-x-4">
        <div className=" mb-4 lg:mb-0 flex justify-center">
          <div className="max-w-full lg:max-w-[80%]">
            <PricingTable />
          </div>
        </div>
        <div className=" flex justify-center">
          <div className="p-6  ">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">Additional Information</h2>
            <p className="text-lg md:text-xl text-gray-700 mb-4">
              Welcome to our laundry service! We offer a range of services to ensure your clothes are clean and fresh.
              Our professional team takes care of your laundry with the utmost care and attention to detail.
            </p>
            <p className="text-lg md:text-xl text-gray-700 mb-4">
              We provide both pressing and dry cleaning services at competitive prices. Take advantage of our free pickup
              and delivery services for a hassle-free experience.
            </p>
            <p className="text-lg md:text-xl text-gray-700">
              Thank you for choosing us for your laundry needs. If you have any questions, feel free to contact us!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingLayout;
