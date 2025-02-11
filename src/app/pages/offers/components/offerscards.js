import React from 'react';

const Offerscards = ({ imageSrc, ctaText, isActive, onClick }) => {
  return (
    <div
      className={`border rounded-lg overflow-hidden shadow-lg border-0 p-2 border-blue-600 transition-transform transform hover:scale-110 hover:shadow-2xl flex flex-col md:w-auto h-full`}
      onClick={() => onClick(imageSrc, ctaText)}
    >
      <div className="relative">
        <img src={imageSrc} alt={ctaText} className="w-full h-full object-contain rounded-lg" />
      </div>
      <div className="flex-grow p-4 text-center">
        <span className='border-0 border-blue-600 rounded-[20px] py-[13px] px-[4px]'>
          <a href="https://wa.me/971589920080" target='_blank'>
            <button className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-2 rounded-2xl hover:from-blue-700 hover:to-indigo-700 hover:scale-105">
              Book Now
            </button>
          </a>
        </span>
      </div>
    </div>
  );
};

export default Offerscards;
