import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import FontAwesome icons

const HowItWorks = () => {
  return (
    <div className="bg-white py-16 px-4 md:px-10">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-green-500">How it Works</h2>
        <p className="text-lg text-gray-700 mt-4">Follow a few easy steps to experience the convenience of Swabi Laundry services.</p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center space-y-10 md:space-y-0 md:space-x-10">
        {/* Step 1 */}
        <div className="w-full md:w-1/4 text-center relative hover:scale-105 transition-transform duration-300 ease-in-out">
          <div className="bg-green-500 p-6 rounded-full mx-auto mb-4 text-white flex justify-center items-center hover:scale-110 transition duration-300 ease-in-out">
            <i className="fas fa-calendar-check text-4xl text-white"></i>
          </div>
          <h3 className="font-semibold text-xl text-blue-900">Book A Pickup</h3>
          <p className="text-gray-600">Choose when and where you want us to collect and deliver your laundry.</p>
        </div>

        {/* Connecting Dotted Line */}
        <div className="md:w-12 flex justify-center items-center">
          <div className="border-t-4 border-dotted border-green-500 w-full"></div>
        </div>

        {/* Step 2 */}
        <div className="w-full md:w-1/4 text-center relative hover:scale-105 transition-transform duration-300 ease-in-out">
          <div className="bg-green-500 p-6 rounded-full mx-auto mb-4 text-white flex justify-center items-center hover:scale-110 transition duration-300 ease-in-out">
            <i className="fas fa-truck text-4xl text-white"></i>
          </div>
          <h3 className="font-semibold text-xl text-blue-900">We Collect</h3>
          <p className="text-gray-600">Our team picks up your clothes directly from your doorstep at the scheduled time.</p>
        </div>

        {/* Connecting Dotted Line */}
        <div className="md:w-12 flex justify-center items-center">
          <div className="border-t-4 border-dotted border-green-500 w-full"></div>
        </div>

        {/* Step 3 */}
        <div className="w-full md:w-1/4 text-center relative hover:scale-105 transition-transform duration-300 ease-in-out">
          <div className="bg-green-500 p-6 rounded-full mx-auto mb-4 text-white flex justify-center items-center hover:scale-110 transition duration-300 ease-in-out">
            <i className="fas fa-tshirt text-4xl text-white"></i>
          </div>
          <h3 className="font-semibold text-xl text-blue-900">Expert Processing</h3>
          <p className="text-gray-600">We professionally clean your garments with care and attention to detail.</p>
        </div>

        {/* Connecting Dotted Line */}
        <div className="md:w-12 flex justify-center items-center">
          <div className="border-t-4 border-dotted border-green-500 w-full"></div>
        </div>

        {/* Step 4 */}
        <div className="w-full md:w-1/4 text-center relative hover:scale-105 transition-transform duration-300 ease-in-out">
          <div className="bg-green-500 p-6 rounded-full mx-auto mb-4 text-white flex justify-center items-center hover:scale-110 transition duration-300 ease-in-out">
            <i className="fas fa-shipping-fast text-4xl text-white"></i>
          </div>
          <h3 className="font-semibold text-xl text-blue-900">We Deliver</h3>
          <p className="text-gray-600">Your freshly cleaned clothes are delivered back to your doorstep on time.</p>
        </div>
      </div>

      <div className="text-center mt-8">
        <a href="https://wa.me/971589920080" target="_blank" rel="noopener noreferrer">
          <button className="bg-green-500 text-white font-semibold py-3 px-8 rounded-md hover:bg-green-600 transition duration-300 ease-in-out">
            Schedule Pickup
          </button>
        </a>
      </div>
    </div>
  );
};

export default HowItWorks;
