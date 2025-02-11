import React from 'react';

const ChoresComponent = () => {
  return (
    <div className="bg-[#30CCC1] px-4 py-10 md:p-10">
      <div className="flex flex-col md:flex-row items-center md:space-x-10">
        {/* Image Section */}
        <div className="w-full md:w-1/2 h-[250px] md:h-[400px] mb-8 md:mb-0">
          <div 
            className="bg-cover bg-center w-full h-full rounded-xl" 
            style={{ backgroundImage: 'url("/bannerimg.jpg")' }}
          ></div>
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">Convenient Laundry Services</h2>
          <p className="text-lg text-blue-900 mb-6">At Swabi Laundry, we offer convenient laundry services that cater to your busy lifestyle. Whether you need dry cleaning for delicate fabrics or wash and fold for everyday wear, we make it easy to get your clothes cleaned and delivered right to your doorstep.</p>
          <p className="text-lg text-blue-900 mb-6">Schedule a laundry pickup today and experience the Swabi Laundry difference! With our fast, reliable services and eco-conscious approach, we provide you with the convenience and quality you deserve.</p>
         
          <a href="https://wa.me/971589920080" target="_blank" rel="noopener noreferrer">
            <button className="bg-white text-blue-900 font-semibold py-2 px-6 rounded-md shadow-md hover:bg-blue-100 transition duration-300 ease-in-out">
              Schedule Pickup
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ChoresComponent;

