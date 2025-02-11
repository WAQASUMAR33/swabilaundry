import React from 'react';

function Tag() {
  return (
    <div className="relative bg-cover bg-center bg-no-repeat h-[650px] md:h-screen mt-20 " style={{ backgroundImage: 'url("/tag.jpg")' }}>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center ">
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight md:p-10">Welcome to Laundry Services</h1>
        <h2 className="text-2xl md:text-4xl font-bold text-white md:p-3">Convenient Pick Up & Delivery</h2>
        <p className="text-lg md:text-xl text-white md:p-3">
          Discover our affordable pricing: <br />
          Press Only: AED 4 <br />
          Clean & Press: AED 8
        </p>
        <button className="bg-white text-black font-bold py-3 px-5 rounded mt-6 flex items-center gap-2">
          Order Now
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Tag;
