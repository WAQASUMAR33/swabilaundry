import React from 'react';
import { FaSearch, FaClock, FaCreditCard } from 'react-icons/fa';

export default function CardsComponent() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-0 md:p-6 mt-2">
      <a href="https://wa.me/971589920080" target="blank" rel="noopener noreferrer">
        <div className="bg-white rounded-lg border-2 border-solid shadow-black shadow-sm hover:shadow-black hover:shadow-md transition-shadow p-4 flex items-center h-[160px] sm:h-[160px] lg:h-[150px]">
          <div className="bg-gray-200 rounded-full p-3 mr-4">
            <FaSearch className="text-green-500 text-3xl" />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-2">No Hidden Cost</h3>
            <p className="text-gray-700 text-sm sm:text-base">
              Fair pricing, no surprises! Only pay for the services you use - no added fees for bags or delivery.
            </p>
          </div>
        </div>
      </a>
      <a href="https://wa.me/971589920080" target="_blank" rel="noopener noreferrer">
        <div className="bg-white rounded-lg border-2 border-solid shadow-black shadow-sm hover:shadow-black hover:shadow-md transition-shadow p-4 flex items-center h-[180px] sm:h-[160px] lg:h-[150px]">
          <div className="bg-gray-200 rounded-full p-3 mr-4">
            <FaClock className="text-green-500 text-3xl" />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-2">Timely Service</h3>
            <p className="text-gray-700 text-sm sm:text-base">
              We prioritize your time and guarantee convenient service with our delivery agent.
            </p>
          </div>
        </div>
      </a>
      <a href="https://wa.me/971589920080" target="_blank" rel="noopener noreferrer">
        <div className="bg-white rounded-lg border-2 border-solid shadow-black shadow-sm hover:shadow-black hover:shadow-md transition-shadow p-4 flex items-center h-[180px] sm:h-[160px] lg:h-[150px]">
          <div className="bg-gray-200 rounded-full p-3 mr-4">
            <FaCreditCard className="text-green-500 text-3xl" />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-2">Payment Flexibility</h3>
            <p className="text-gray-700 text-sm sm:text-base">
              Pay as you like. We accept payments via cash, credit and debit cards.
            </p>
          </div>
        </div>
      </a>
    </div>
  );
}
