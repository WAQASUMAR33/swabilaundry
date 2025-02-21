'use client';
import React, { useState } from 'react';
import { DatePicker, Space, TimePicker } from 'antd';
import Modal from 'react-modal';
import { ToastContainer } from 'react-toastify';
import { FaTimes, FaCheckCircle } from 'react-icons/fa';
import 'react-toastify/dist/ReactToastify.css';
import { sendGTMEvent } from '@next/third-parties/google';

const OrderForm = () => {
  const [pickupDate, setPickupDate] = useState(null);
  const [pickupTime, setPickupTime] = useState(null);
  const [buttonText, setButtonText] = useState('Submit');
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Handle Date and Time Selection
  const handleDateChange = (date, dateString) => setPickupDate(dateString);
  const handleTimeChange = (time, timeString) => setPickupTime(timeString);

  // ✅ Moved handleClick Outside handleSubmit
  const handleClick = () => {
    sendGTMEvent({ event: "whatsappclick", value: "xyz" });
    console.log("WhatsApp link clicked");
    window.open("https://wa.me/971589920080?text=" + encodeURIComponent("Hi Swabi Laundry team. I would like to know about the pricing, service, and want to schedule a free pickup."), "_blank");
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText('Sending...');
    sendGTMEvent({ event: 'formSubmit', value: 'order_submission' });

    const formData = new FormData(e.target);
    formData.append('pickupDate', pickupDate);
    formData.append('pickupTime', pickupTime);

    try {
      const response = await fetch("https://swabilaundry.ae/desingersendemail.php", {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.status === "success") {
        alert(data.message);
        setIsModalOpen(true);
        e.target.reset();
        setPickupDate(null);
        setPickupTime(null);
      } else {
        alert(data.message);
      }
    } catch (error) {
      alert("There was a problem sending the email.");
    } finally {
      setButtonText('Submit');
    }
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="flex flex-wrap justify-between w-full max-w-7xl mx-auto bg-white p-6 rounded-lg">
      {/* Left Section: Shorter Instructions */}
      <div className="w-full md:w-1/2 p-6 rounded-lg mb-6 md:mb-0">
        <h2 className="text-3xl font-bold mb-4">Pick Up & Delivery (100% Free)</h2>
        <p className="text-lg mb-4">Book your **free pickup** and enjoy quality laundry services at home.</p>
        
        <ul className="list-disc ml-6 text-lg">
          <li>**HomeCare**: For your household linens.</li>
          <li>**Clean & Press**: For garment care.</li>
          <li>**Wash & Fold**: For everyday clothes.</li>
        </ul>

        <h3 className="text-2xl font-semibold mt-8 mb-4">How to Order:</h3>
        <ol className="list-decimal ml-6 text-lg mb-6">
          <li>Provide your details (name, phone, address).</li>
          <li>Select the laundry service you need.</li>
          <li>Choose your preferred pickup date and time.</li>
        </ol>

        <div className="mt-6">
          <p className="font-semibold">Need help? Reach us:</p>
          {/* ✅ Fixed WhatsApp Contact Button */}
          <span onClick={handleClick} className="inline-block bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-700 cursor-pointer">
            Chat with us on WhatsApp
          </span>
        </div>

        <div className="mt-4">
          <p className="font-semibold">Or call us directly:</p>
          {/* Call Us Button */}
          <a href="tel:+971589920080" className="inline-block bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700">
            Call Us Now
          </a>
        </div>
      </div>

      {/* Right Section: Order Form */}
      <div className="w-full md:w-1/2 bg-gray-50 p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-4">Book Order</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input required name="name" type="text" placeholder="Your Name" className="w-full p-3 border rounded-md shadow-sm" />
          <input required name="phone" type="text" placeholder="Phone Number*" className="w-full p-3 border rounded-md shadow-sm" />
          <textarea required name="address" placeholder="Flat No, Building Name, Area Name*" className="w-full p-3 border rounded-md shadow-sm"></textarea>
          <select required name="service" className="w-full p-3 border rounded-md shadow-sm">
            <option>Please Select</option>
            <option>HomeCare</option>
            <option>Clean & Press</option>
            <option>Wash & Fold</option>
          </select>
          <div className="flex space-x-4">
            <Space direction="vertical" className="w-full">
              <DatePicker onChange={handleDateChange} className="w-full p-3 border rounded-md shadow-sm" placeholder="Pickup Date*" />
            </Space>
            <Space direction="vertical" className="w-full">
              <TimePicker use12Hours format="h:mm a" onChange={handleTimeChange} className="w-full p-3 border rounded-md shadow-sm" placeholder="Pickup Time*" />
            </Space>
          </div>
          <button type="submit" className="w-full bg-orange-500 hover:bg-orange-700 text-white font-semibold py-3 px-4 rounded-md shadow-md">
            {buttonText}
          </button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default OrderForm;
