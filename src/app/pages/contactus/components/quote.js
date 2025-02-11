import React from 'react';

function Quote() {
  return (
    <div className=" bg-blue-500 md:h-[400px] mb-20">
      <div className=" bg-black py-10 bg-opacity-50 flex flex-col items-center justify-center text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-white px-3 md:px-10 leading-tight">
          Fresh and Clean Laundry, Delivered to Your Doorstep
        </h1>
        <p className="text-lg md:text-xl text-white px-3 md:px-10 mt-5">
          Discover the convenience of Swabi Laundry's fast and reliable laundry and dry cleaning services. We ensure your clothes are cleaned with care and delivered back to you on time.
        </p>
        <p className="text-lg md:text-xl text-white px-3 md:px-10 mt-5">
          Experience the Swabi Laundry difference today!
        </p>
      </div>
    </div>
  );
}

export default Quote;
