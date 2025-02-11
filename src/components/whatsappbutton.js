"use client"
import { sendGTMEvent } from '@next/third-parties/google'
// components/WhatsAppButton.js
import { FaWhatsapp } from 'react-icons/fa';
export default function WhatsAppButton() {

  const handleClick = () => {
    // Perform your desired actions here
    // For example, sending a GTM event
    sendGTMEvent({ event: 'whatsappclick', value: 'xyz' });

    // You can also perform other actions like logging
    console.log('WhatsApp link clicked');
 };
 
  return (    
    <span onClick={handleClick}>
    <a href="https://wa.me/971589920080?text=Hi Swabi Laundry team. I would like to know about the pricing, service, and want to schedule a free pickup." target="_blank"  className="fixed bottom-4 right-4 w-16 h-16 bg-green-500 rounded-full shadow-lg flex items-center justify-center z-50 text-white text-3xl">
      <FaWhatsapp />  
    </a>
    </span>
  );
}
