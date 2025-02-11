// components/Offers.js
'use client'
import { useState, useEffect } from 'react';

const Offers = () => {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    // Simulate fetching data from an API
    const fetchOffers = async () => {
      const offersData = [
        { id: 1, title: '50% Off on First Order', description: 'Get 50% off on your first laundry order!' },
        { id: 2, title: 'Buy One Get One Free', description: 'Buy one service and get another one absolutely free!' },
        { id: 3, title: '20% Off on Premium Services', description: 'Enjoy a 20% discount on all premium laundry services.' }
      ];
      setOffers(offersData);
    };

    fetchOffers();
  }, []);

  return (
    <div className="p-8 bg-gray-100 rounded-lg mt-[120px] text-center">
      <h1 className="text-4xl font-bold mb-8">Current Offers</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {offers.map((offer) => (
          <div key={offer.id} className="p-6 rounded-lg shadow-lg transform transition-transform duration-300 bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-800">
            <h2 className="text-3xl font-semibold mb-4 text-white">{offer.title}</h2>
            <p className="text-white">{offer.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offers;
