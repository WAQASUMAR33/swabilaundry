import React from "react";
import { motion } from "framer-motion";
import { FaTshirt, FaCalendarCheck, FaShippingFast } from "react-icons/fa";

const steps = [
  {
    id: "01",
    icon: <FaCalendarCheck className="text-6xl text-[#92C644]" />, 
    title: "Pick Up Your Clothes",
    description: "Convenient service at your doorstep."
  },
  {
    id: "02",
    icon: <FaTshirt className="text-6xl text-[#92C644]" />,
    title: "Laundry & Dry Clean",
    description: "Professional cleaning to preserve fabric quality."
  },
  {
    id: "03",
    icon: <FaShippingFast className="text-6xl text-[#92C644]" />,
    title: "Fold Clothes & Deliver",
    description: "Schedule a time that works for you."
  }
];

const HowItWorks = () => {
  return (
    <div className="bg-white py-16 px-0 md:px-10 text-center">
      <h2 className="text-4xl md:text-4xl font-bold text-[#92C644] pb-8">HOW ITS WORKS</h2>

      <div className="flex flex-col md:flex-row items-center justify-center mt-10 space-y-10 md:space-y-0 md:space-x-12">
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className="relative group w-full md:w-1/3 text-center hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            <div className="relative flex items-center justify-center w-32 h-32 rounded-full border-4 border-[#92C644] mx-auto mb-4 bg-white group-hover:bg-purple-100 transition">
              {step.icon}
              <motion.span
                className="absolute top-0 right-0 w-10 h-10 flex items-center justify-center text-white font-bold bg-[#92C644] rounded-full transform translate-x-2 -translate-y-2 group-hover:scale-110 transition"
              >
                {step.id}
              </motion.span>
            </div>
            <h3 className="font-semibold text-xl text-gray-900">{step.title}</h3>
            <p className="text-gray-600 group-hover:text-[#92C644] transition">{step.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="mt-8"
      >
        <button className="bg-[#92C644] text-white font-semibold py-3 px-8 rounded-md hover:bg-[#92C644] transition duration-300 ease-in-out shadow-lg">
          Book Our Services Now
        </button>
      </motion.div>
    </div>
  );
};

export default HowItWorks;
