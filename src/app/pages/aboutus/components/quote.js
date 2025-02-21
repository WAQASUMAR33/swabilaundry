"use client"
import React from "react";
import { sendGTMEvent } from "@next/third-parties/google"; // Ensure this is imported

function Quote() {
  const phoneNumber = "971589920080";
  const message =
    "Hi Swabi Laundry team. I would like to know about the pricing, service, and want to schedule a free pickup.";
  const encodedMessage = encodeURIComponent(message);
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  const handleClick = () => {
    sendGTMEvent({ event: "whatsappclick", value: "kjxyz" });
    console.log("WhatsApp link clicked");
    window.open(whatsappLink, "_blank"); // Opens WhatsApp chat in new tab
  };

  return (
    <div className="bg-blue-500 md:h-[500px] mb-20 relative">
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative flex flex-col items-center justify-center text-center py-10 px-5">
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight max-w-3xl mx-auto">
          Fresh and Clean Laundry, Delivered to Your Doorstep
        </h1>
        <p className="text-lg md:text-xl text-white mt-5 max-w-2xl mx-auto">
          Discover the convenience of Swabi Laundry's fast and reliable laundry and dry cleaning services. We ensure your clothes are cleaned with care and delivered back to you on time.
        </p>
        <p className="text-lg md:text-xl text-white mt-5 max-w-2xl mx-auto">
          Experience the Swabi Laundry difference today!
        </p>
        {/* WhatsApp CTA Button */}
        <span
          onClick={handleClick}
          className="mt-8 bg-orange-500 text-white py-3 px-8 rounded-lg font-semibold text-lg hover:bg-orange-600 transition-all duration-300 cursor-pointer"
        >
          Book Now
        </span>
      </div>
    </div>
  );
}

export default Quote;
