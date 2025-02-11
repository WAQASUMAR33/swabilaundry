"use client";
import React from "react";
import CardsComponent from "./cardscomponent";
import { sendGTMEvent } from "@next/third-parties/google";

const Benefits = () => {
  const handleClick = () => {
    sendGTMEvent({ event: "whatsappclick", value: "xyz" });
    console.log("WhatsApp link clicked");
  };

  return (
    <div className="w-full flex flex-col items-center p-10 bg-gray-50">
      {/* Header Section */}
      <div className="w-full max-w-5xl text-center py-5">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
          Fresh, Clean, and Hassle-Free Laundry Care
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          Let us handle the washing while you enjoy more free time. We pick up, clean, 
          and deliver your laundry with care—using eco-friendly detergents and 
          gentle cleaning methods. Fast turnaround and doorstep service make 
          laundry day effortless!
        </p>
      </div>

      {/* Cards Section */}
      <CardsComponent />

      {/* Call-to-Action Button */}
      <div className="mt-8">
        <span onClick={handleClick}>
          <a
            href="https://wa.me/971589920080"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-full shadow-lg transition duration-300 ease-in-out"
          >
            Schedule Your Pickup
          </a>
        </span>
      </div>
    </div>
  );
};

export default Benefits;
