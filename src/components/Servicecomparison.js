// components/ServiceComparison.js

import React from 'react';
import { CheckCircleIcon, ClockIcon, TruckIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline';

const services = [
  {
    id: 'wash',
    title: 'Wash',
    backgroundColor: '#BAEBFF',
    icon: 'https://prod-cdn.laundryheap.com/images/static/price_services/web/wash_small.png',
    includes: 'WASH + TUMBLE-DRY',
    items: 'T-shirts, trousers, bedsheets and undergarments.',
    time: '24h*',
    price: 'AED 65',
    priceType: 'Price per KG',
    delivery: 'Free',
    returned: 'In a Laundryheap bag',
    ecoFriendly: true,
  },
  {
    id: 'clean_and_iron',
    title: 'Clean & Iron',
    backgroundColor: '#93ECE5',
    icon: 'https://prod-cdn.laundryheap.com/images/static/price_services/web/clean_and_iron_small.png',
    includes: 'WASH/DRY CLEANING + IRONING',
    items: 'Shirts, t-shirts, suits, trousers and bedsheets.',
    time: '24h*',
    price: 'AED 4',
    priceType: 'Price per item',
    delivery: 'Free',
    returned: 'On hangers',
    ecoFriendly: true,
  },
  {
    id: 'ironing',
    title: 'Ironing',
    backgroundColor: '#FFE5AE',
    icon: 'https://prod-cdn.laundryheap.com/images/static/price_services/web/ironing_small.png',
    includes: 'IRONING',
    items: 'Shirts, t-shirts and bedsheets.',
    time: '24h*',
    price: 'AED 7',
    priceType: 'Price per item',
    delivery: 'Free',
    returned: 'On hangers',
    ecoFriendly: true,
  },
  {
    id: 'duvets_bulky_items',
    title: 'Duvets & Bulky Items',
    backgroundColor: '#DCF5FF',
    icon: 'https://prod-cdn.laundryheap.com/images/static/price_services/web/duvets_bulky_items_small.png',
    includes: 'CUSTOM CLEANING',
    items: 'Duvets, pillows and blankets.',
    time: 'Up to 3 days',
    price: 'AED 18',
    priceType: 'Price per item',
    delivery: 'Free',
    returned: 'In a Laundryheap bag',
    ecoFriendly: true,
  },
];
const ServiceCard = ({ service }) => (
  <div
    className="w-full md:w-1/3 lg:w-1/5 rounded shadow-lg m-2 flex flex-col"
    style={{ backgroundColor: service.backgroundColor }}
  >
    <div className="p-4 flex items-center justify-center">
      <img className="h-16 w-16 object-contain" src={service.icon} alt={service.title} />
    </div>
    <div className="px-6 py-4 flex-grow">
      <div className="font-bold text-xl mb-2 text-center md:text-left">{service.title}</div>
      <p className="text-gray-700 text-base mb-2 text-center md:text-left"><strong>Includes:</strong> <br /> {service.includes}</p>
      <p className="text-gray-700 text-base mb-2 text-center md:text-left"><strong>Items:</strong><br /> {service.items}</p>
      <div className="flex flex-col space-y-2">
        <div className="flex items-center">
          <ClockIcon className="h-6 w-6 text-gray-700 mr-2" />
          <span><strong>Service Time:</strong> {service.time}</span>
        </div>
        <div className="flex items-center">
          <CurrencyDollarIcon className="h-6 w-6 text-gray-700 mr-2" />
          <span><strong>Pricing:</strong> {service.price} ({service.priceType})</span>
        </div>
        <div className="flex items-center">
          <TruckIcon className="h-6 w-6 text-gray-700 mr-2" />
          <span><strong>Delivery:</strong> {service.delivery}</span>
        </div>
        <div className="flex items-center">
          <CheckCircleIcon className={`h-6 w-6 ${service.ecoFriendly ? 'text-green-500' : 'text-red-500'} mr-2`} />
          <span>{service.ecoFriendly ? 'Eco-friendly' : 'Not eco-friendly'}</span>
        </div>
      </div>
    </div>
    <div className="px-6 py-4 mt-auto text-center">
      <button className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
        Book Now
      </button>
    </div>
  </div>
);

const ServiceComparison = () => {
  return (
    <div className="pt-20 pb-8 md:pt-24 bg-gray-100">
      <div className="container mx-auto mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold" id="landingServiceComparisonTitle">
            <strong>Compare</strong> our services
          </h2>
        </div>
        <div className="flex flex-wrap justify-center">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceComparison;
