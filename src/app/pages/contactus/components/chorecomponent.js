import React from 'react';

const ChoresComponent = () => {
  return (
    <div className="bg-[#30CCC1] px-4 py-10 md:p-10">
      <div className="flex flex-col md:flex-row items-center md:space-x-10">
        <div className="w-full md:w-[400px] h-[250px] md:h-[400px] mb-8 md:mb-0">
          <div className="bg-cover bg-center w-full h-full rounded-xl" style={{ backgroundImage: 'url("/bannerimg.jpg")' }}></div>
        </div>
        <div className="text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">Convenient Laundry Services</h2>
          <p className="text-lg text-blue-900 mb-6">Enter your address and schedule a pickup today</p>
          <a href="https://wa.me/971589920080" target='blank'>
          <button className="bg-white text-blue-900 font-semibold py-2 px-6 rounded-md shadow-md hover:bg-blue-100">
            Schedule Pickup
          </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ChoresComponent;
