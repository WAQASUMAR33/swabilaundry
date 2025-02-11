import React from 'react';

function LaundryInfo() {
  return (
    <div className="container mx-auto px-6 text-center">
      <div className="bg-purple-200 text-purple-700 rounded-full px-3 py-1 inline-block mb-4">
        No 1 Laundry Service In Dubai
      </div>
      <h1 className="text-3xl md:text-4xl font-bold text-black mb-2">
        Affordable <span className="text-green-500">Laundry</span> <span className="text-purple-500">Pricing</span>
      </h1>
      <p className="text-lg md:text-xl text-black mb-4">
        Your search for "Dry cleaners and Laundry service near me" ends here.
      </p>
      <h2 className="text-xl md:text-2xl font-bold text-black mb-4">Can you beat that?</h2>
      <p className="text-base md:text-lg text-black mb-2">
        We have <span className="font-semibold">clubbed</span> your daily laundry items into <span className="font-semibold">6 categories</span> to provide you with easy-to-navigate and pocket-friendly price options.
      </p>
      <p className="text-base md:text-lg text-black mb-2">
        Now, <span className="font-semibold">pay a flat rate</span> for all the items within your favorite category.
      </p>
      <p className="text-base md:text-lg text-black mb-2">
        Our minimum order value is AED 50. We are proud to inform that <span className="font-semibold">we don’t charge service fees</span> or any other hidden fees.
      </p>
    </div>
  );
}

export default LaundryInfo;
