'use client';
import React, { useState, useEffect } from 'react';
import { FiPlus, FiX } from 'react-icons/fi';
import axios from 'axios';

const FaqSection = () => {
  const [faqs, setFaqs] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const response = await axios.get('/api/faq');
        setFaqs(response.data);
      } catch (error) {
        console.error('Error fetching FAQs:', error);
      }
    };
    fetchFaqs();
  }, []);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="container-fluid mx-auto py-12 px-4 sm:px-6 lg:px-8">
      {/* Section Title */}
      <h2 className="text-4xl sm:text-5xl font-bold text-center ">
        Frequently Asked Questions
      </h2>
      <p className="mt-4 text-gray-600 text-sm md:text-base text-center ">Find answers to your questions about Swabi Laundry</p>
    
      {/* FAQ List */}
      <div className="w-full mx-auto space-y-4  px-4 sm:px-8 lg:px-16">
        {faqs.map((faq, index) => (
          <div key={faq.id} className="bg-white shadow-md rounded-xl overflow-hidden">
            {/* Question */}
            <div
              className="flex justify-between items-center p-5 cursor-pointer hover:bg-gray-100 transition-all"
              onClick={() => toggleFAQ(index)}
            >
              <span className="text-lg sm:text-xl font-semibold text-gray-900">
                {faq.question}
              </span>
              {activeIndex === index ? (
                <FiX className="text-gray-600 text-2xl" />
              ) : (
                <FiPlus className="text-gray-600 text-2xl" />
              )}
            </div>
            
            {/* Answer (Expandable) */}
            {activeIndex === index && (
              <div className="p-5 text-gray-700 text-base sm:text-lg border-t">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqSection;
