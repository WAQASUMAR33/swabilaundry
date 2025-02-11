// components/ContactComponent.js
import Image from 'next/image';

export default function ContactComponent() {
  return (
    <div className="flex flex-col md:flex-row items-center p-6 bg-white shadow-lg rounded-lg">
      <div className="w-full md:w-1/2 mb-4 md:mb-0">
        <div className="relative h-auto md:h-auto">
          <img 
            src="/van.jpeg" 
            alt="DipDap Van"
            layout="fill"
            objectFit="cover"
            className="rounded-lg w-[800px]"
          ></img>
        </div>
      </div>
      <div className="w-full md:w-1/2 text-center md:text-left md:pl-6">
        <div className="items-center justify-center md:justify-start mb-2">
          <img src='/google.png' width={200} height={200} alt="Google Logo"></img>
          <div className="flex items-center ml-2">
            <span className="text-yellow-500 text-4xl">★ ★ ★ ★ ★</span>
            <span className="ml-2 text-2xl text-gray-700">4.7 STAR</span>
          </div>
        </div>
        <p className="text-gray-600">CUSTOMER RATING</p>
        <div className="mt-4">
          <p className="text-lg text-green-500 font-semibold">Free Pick Up & Delivery</p>
          <p className="text-gray-700">20% off for the 1st 3 orders</p>
          <p className="text-gray-700">No Hidden Cost</p>
        </div>
        <div className="mt-4 flex flex-col md:flex-row items-center md:items-start md:justify-start">
          <a 
            href="tel:+971585927959" 
            className="block w-full md:w-auto bg-green-500 text-white font-bold py-2 px-4 rounded mb-2 md:mb-0 md:mr-2"
          >
            +971-585927959
          </a>
          <button className="block w-full md:w-auto bg-green-500 text-white font-bold py-2 px-4 rounded">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
}
