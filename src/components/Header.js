'use client'
import React from 'react';
import DesktopNavbar from './DesktopNavbar';
import MobileNavbar from './MobileNavbar';

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between items-center bg-white shadow-lg top-0 left-0 right-0 z-50">
      <DesktopNavbar />
      <MobileNavbar />
    </nav>
  );
};

export default Navbar;
