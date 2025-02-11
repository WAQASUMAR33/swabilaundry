'use client'
import React, { useState } from 'react';
import Link from 'next/link';

const MobileNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="lg:hidden w-full p-3 flex justify-between items-center bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center">
        <Link href="/" aria-label="Homepage" className="flex items-center" onClick={closeMobileMenu}>
          <img src="/swabi logo.png" width={70} height={70} alt="Logo" />
          <img src="/swabi text.png" width={90} className="ml-2" alt="Text Logo" />
        </Link>
      </div>
      <button
        className="menu-toggle focus:outline-none"
        onClick={toggleMobileMenu}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="27"
          height="18"
          viewBox="0 0 27 18"
          fill="none"
        >
          <path d="M0 1.5C0 0.671573 0.671573 0 1.5 0H25.5C26.3284 0 27 0.671573 27 1.5C27 2.32843 26.3284 3 25.5 3H1.5C0.671573 3 0 2.32843 0 1.5Z" fill="currentColor" />
          <path d="M0 9C0 8.17157 0.671573 7.5 1.5 7.5H25.5C26.3284 7.5 27 8.17157 27 9C27 9.82843 26.3284 10.5 25.5 10.5H1.5C0.671573 10.5 0 9.82843 0 9Z" fill="currentColor" />
          <path d="M1.5 15H25.5C26.3284 15 27 15.6716 27 16.5C27 17.3284 26.3284 18 25.5 18H1.5C0.671573 18 0 17.3284 0 16.5C0 15.6716 0.671573 15 1.5 15Z" fill="currentColor" />
        </svg>
      </button>
      <div className={`absolute inset-x-0 top-full w-full bg-white shadow-lg z-40 transition-transform transform ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        {isMobileMenuOpen && (
          <div className="flex flex-col space-y-4 p-4">
            <Link href="/" className="nav-link hover:bg-gray-200 px-4 py-2 rounded-lg" onClick={closeMobileMenu}>
              Home
            </Link>
            <Link href="/pages/pricing" className="nav-link hover:bg-gray-200 px-4 py-2 rounded-lg" onClick={closeMobileMenu}>
              Prices
            </Link>
            <Link href="/pages/offers" className="nav-link hover:bg-gray-200 px-4 py-2 rounded-lg" onClick={closeMobileMenu}>
              Offers
            </Link>
            <Link href="/pages/businesspage" className="nav-link hover:bg-gray-200 px-4 py-2 rounded-lg" onClick={closeMobileMenu}>
              For business
            </Link>
            <Link href="/pages/FAQpage" className="nav-link hover:bg-gray-200 px-4 py-2 rounded-lg" onClick={closeMobileMenu}>
              FAQ
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileNavbar;
