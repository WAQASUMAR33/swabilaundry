import React, { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'What laundry services does Swabi Laundry offer in Dubai?',
      answer:
        'Swabi Laundry provides a wide range of laundry services in Dubai, including wash and fold, dry cleaning, ironing, stain removal, and specialized fabric care. We cater to both individual and commercial clients, ensuring your clothes are treated with the utmost care.',
    },
    {
      question: 'How do I schedule a pickup and delivery for laundry services in Dubai?',
      answer:
        'Scheduling a pickup and delivery with Swabi Laundry is simple! Visit our website at swabilaundry.ae to book your laundry services in Dubai online. Alternatively, you can call us at [Your Phone Number] to arrange a pickup.',
    },
    {
      question: 'What areas in Dubai does Swabi Laundry serve?',
      answer:
        'Swabi Laundry proudly offers laundry services in Dubai, covering areas like Downtown Dubai, Jumeirah, Marina, and more. Our convenient pickup and delivery options make it easy for customers across Dubai to enjoy our services.',
    },
    {
      question: 'How does Swabi Laundry ensure the quality of its dry cleaning and laundry services in Dubai?',
      answer:
        'At Swabi Laundry, we use state-of-the-art equipment and eco-friendly detergents to provide the best dry cleaning and laundry services in Dubai. Our experienced team follows strict quality control measures to ensure your clothes are cleaned safely and effectively.',
    },
    {
      question: 'What are the operating hours for Swabi Laundry in Dubai?',
      answer:
        'Swabi Laundry is open from 8:00 AM to 10:00 PM every day, including weekends. We also offer 24/7 online booking for your convenience, making it easy to access laundry services in Dubai anytime.',
    },
    {
      question: 'Does Swabi Laundry offer eco-friendly laundry services in Dubai?',
      answer:
        'Yes, Swabi Laundry is committed to sustainability. We provide eco-friendly laundry services in Dubai, using environmentally safe detergents and energy-efficient machines to reduce our carbon footprint.',
    },
    {
      question: 'How much does wash and fold service cost at Swabi Laundry in Dubai?',
      answer:
        'Our wash and fold services are competitively priced based on the volume of laundry. For a detailed price list or to learn about ongoing promotions for laundry services in Dubai, visit our website or contact us directly.',
    },
    {
      question: 'Can Swabi Laundry handle delicate fabrics and special garments?',
      answer:
        'Absolutely! Swabi Laundry specializes in caring for delicate fabrics, including silk, wool, and lace. Whether it’s a wedding dress, suit, or designer wear, our dry cleaning and specialized fabric care services ensure your garments are treated with the utmost care.',
    },
    {
      question: 'What is the turnaround time for laundry services at Swabi Laundry in Dubai?',
      answer:
        'Our standard turnaround time for laundry services in Dubai is 24 hours. For urgent needs, we also offer express services to accommodate your schedule.',
    },
    {
      question: 'Does Swabi Laundry offer subscription plans or bulk discounts in Dubai?',
      answer:
        'Yes, Swabi Laundry offers subscription plans and bulk discounts for regular customers and businesses in Dubai. Contact us to learn more about our cost-effective packages for laundry services in Dubai.',
    },
    {
      question: 'How do I contact Swabi Laundry for customer support in Dubai?',
      answer:
        'For any inquiries about our laundry services in Dubai, you can reach Swabi Laundry by calling [Your Phone Number], emailing [Your Email Address], or visiting our website at swabilaundry.ae. Our customer support team is always ready to assist you.',
    },
    {
      question: 'Is Swabi Laundry insured and reliable?',
      answer:
        'Yes, Swabi Laundry is fully insured, and we take every precaution to ensure the safety of your garments. Our reputation for reliability and high-quality laundry services in Dubai has made us a trusted choice for customers.',
    },
    {
      question: 'Do I need to separate my laundry before pickup?',
      answer:
        'No, you don’t need to separate your laundry. Our team will sort and wash your clothes according to fabric type, color, and washing instructions, ensuring the best results for your wash and fold or dry cleaning services.',
    },
    {
      question: 'What payment methods does Swabi Laundry accept in Dubai?',
      answer:
        'Swabi Laundry accepts various payment methods, including cash, credit/debit cards, and online payments, making it convenient for customers to pay for laundry services in Dubai.',
    },
    {
      question: 'Can I track my order with Swabi Laundry in Dubai?',
      answer:
        'Yes, Swabi Laundry provides order tracking for all laundry services in Dubai. Once your laundry is scheduled, you’ll receive updates on the status of your order.',
    },
  ];

  return (
    <div className="w-full mx-auto p-8">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border rounded-lg overflow-hidden">
            <button
              className={`w-full p-4 text-left flex justify-between items-center ${
                activeIndex === index ? 'bg-gray-100' : 'bg-white'
              } hover:bg-gray-50 transition-colors`}
              onClick={() => toggleFAQ(index)}
            >
              <span className="font-medium text-gray-700">{faq.question}</span>
              <span className="text-gray-500">
                {activeIndex === index ? '-' : '+'}
              </span>
            </button>
            {activeIndex === index && (
              <div className="p-4 bg-gray-50 border-t">
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;