// components/TopBar.js

import React from 'react';
import { FaStar } from 'react-icons/fa';

const TopBar = () => {
  return (
    <div className="fixed overflow-hidden  top-0 w-full bg-blue-200 p-2 z-50">
      <div className=" flex items-center text-md justify-center gap-6">
        <p className="m-0  text-gray-700">Welcome to Swabi family! Get 20% discount on your first 3 orders</p>
        <p className='font-bold'>Use code:  <span className='p-1 px-3 mx-2 text-white font-bold bg-green-500 rounded-xl'>20%OFF</span> </p>
       
      </div>
    </div>
  );
};

export default TopBar;
