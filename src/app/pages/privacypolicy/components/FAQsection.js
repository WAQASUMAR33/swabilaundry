'use client'
import React, { useState } from 'react';

const faqData = [
  {
    question: "Do you have a minimum charge?",
    answer: "We request to have a minimum order of AED 50. There are no other hidden charges - service or for hangars. However, we do process orders below this amount. In such cases (where the order value is less than 50 AED) the customer is charged with a convenience fee of AED 7."
  },
  {
    question: "Do you have any delivery fees?",
    answer: "No. Swabi Laundry not only has ZERO delivery fees but also has no other hidden charges per order. There is, however, a minimum order requirement of AED 50 per order."
  },
  {
    question: "How do I know how much my total order amount is?",
    answer: "Once we collect your clothes, an itemized bill with the expected total order amount is generated. This bill will be shared with you at the time of delivery or on request earlier."
  },
  {
    question: "How do I pay?",
    answer: "Swabi Laundry has all available payment options - cash, card (debit & credit), and payment links. You can choose to pay the total order amount on the delivery of your items."
  }
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Close if already open
    } else {
      setActiveIndex(index); // Open the clicked item
    }
  };

  return (
    <div className="bg-gray-100 py-10 md:py-16 px-4 md:px-8 lg:px-20">
      <div className="container mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <span className="text-pink-600 bg-pink-200 px-3 py-1 rounded">Laundry Service In Dubai</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4">FAQs <span className="bg-gradient-to-r from-pink-500 to-yellow-500 text-transparent bg-clip-text">Laundry Service</span></h2>
          <p className="mt-3 md:mt-4">How can we help you?</p>
        </div>
        <div className="space-y-8">
          {faqData.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-4 md:p-6">
              <button
                className="flex justify-between items-center w-full focus:outline-none"
                onClick={() => toggleAnswer(index)}
              >
                <h3 className="text-lg md:text-xl font-semibold">{faq.question}</h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-6 w-6 transition-transform transform ${activeIndex === index ? 'rotate-180' : 'rotate-0'}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeIndex === index && (
                <p className="mt-2 text-sm md:text-base text-gray-700">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
