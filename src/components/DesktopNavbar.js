"use client";

import React, { useState } from "react";
import Link from "next/link";
import TopBar from "./topbar";
import { sendGTMEvent } from "@next/third-parties/google";

const DesktopNavbar = () => {
  const [isServicesMenuOpen, setServicesMenuOpen] = useState(false);
  const [isLocationMenuOpen, setLocationMenuOpen] = useState(false);

  const phoneNumber = "971589920080";
  const message =
    "Hi Swabi Laundry team. I would like to know about the pricing, service, and want to schedule a free pickup.";
  const encodedMessage = encodeURIComponent(message);

  const handleClick = () => {
    sendGTMEvent({ event: "whatsappclick", value: "xyz" });
    console.log("WhatsApp link clicked");
  };

  return (
    <>
      <TopBar />
      <div className="hidden lg:flex justify-between items-center w-full bg-white shadow-md fixed top-10 left-0 right-0 z-40 p-4">
        {/* Logo Section */}
        <div className="flex items-center">
          <Link href="/" aria-label="Homepage" className="flex items-center">
            <img
              src="/swabi logo.png"
              width={70}
              height={70}
              className="ml-10 pb-1"
              alt="Logo"
            />
            <img
              src="/swabi text.png"
              width={90}
              className="ml-5 p-1"
              alt="Text Logo"
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-4 text-lg">
          <Link
            href="/"
            className="nav-link hover:bg-white hover:text-blue-600 px-4 py-2 hover:rounded-lg"
          >
            Home
          </Link>


          <Link
            href="/pages/aboutus/"
            className="nav-link hover:bg-white hover:text-blue-600 px-4 py-2 hover:rounded-lg"
          >
            About Us
          </Link>

          {/* Mega Menu - Services */}
          <div
            className="relative"
            onMouseEnter={() => setServicesMenuOpen(true)}
            onMouseLeave={() => setServicesMenuOpen(false)}
          >
            <button
              className="nav-link hover:bg-white hover:text-blue-600 px-4 py-2 hover:rounded-lg"
            >
              Services
            </button>
            {isServicesMenuOpen && (
              <div
                className="absolute top-full left-1/4 transform -translate-x-1/4 bg-white shadow-lg p-6 grid grid-cols-6 gap-1 max-w-screen-2xl z-50 rounded-lg"
                style={{ minWidth: "1000px", width: "auto" }}
              >
                {/* Column 1: All Tops & Bottoms */}
                <div className="col-span-1 ">
                  <h3 className="font-bold text-sm mb-2">All Tops & Bottoms</h3>
                  <ul className="font-poppins text-sm">
                    <li className="py-1">
                      <Link href="/services/shirt" className="hover:text-blue-600">
                        Shirt
                      </Link>
                    </li>
                    <li className="py-1">
                      <Link href="/services/blouse" className="hover:text-blue-600">
                        Blouse
                      </Link>
                    </li>
                    <li className="py-1">
                      <Link href="/services/t-shirt" className="hover:text-blue-600">
                        T-Shirt
                      </Link>
                    </li>
                    <li className="py-1">
                      <Link href="/services/trouser" className="hover:text-blue-600">
                        Trouser
                      </Link>
                    </li>
                    <li className="py-1">
                      <Link href="/services/jeans" className="hover:text-blue-600">
                        Jeans
                      </Link>
                    </li>
                    <li className="py-1">
                      <Link href="/services/skirt" className="hover:text-blue-600">
                        Skirt
                      </Link>
                    </li>
                    <li className="py-1">
                      <Link href="/services/ghatra" className="hover:text-blue-600">
                        Ghatra
                      </Link>
                    </li>
                    <li className="py-1">
                      <Link href="/services/kurta" className="hover:text-blue-600">
                        Kurta
                      </Link>
                    </li>
                    <li className="py-1">
                      <Link href="/services/waist-coat" className="hover:text-blue-600">
                        Waist Coat
                      </Link>
                    </li>
                    <li className="py-1">
                      <Link href="/services/cardigan" className="hover:text-blue-600">
                        Cardigan
                      </Link>
                    </li>
                  </ul>

                </div>

                {/* Column 2: Full Wear */}
                <div className="col-span-1 ">
                  <h3 className="font-bold text-sm mb-2">Full Wear</h3>
                  <ul className="font-poppins text-sm">
                    <li className="py-1"><Link href="/services/full-wear" className="hover:text-blue-600">Full Wear</Link></li>
                    <li className="py-1"><Link href="/services/casual-dress" className="hover:text-blue-600">Casual Dress</Link></li>
                    <li className="py-1"><Link href="/services/formal-dress" className="hover:text-blue-600">Formal Dress</Link></li>
                    <li className="py-1"><Link href="/services/abaya" className="hover:text-blue-600">Abaya</Link></li>
                    <li className="py-1"><Link href="/services/dish-dash" className="hover:text-blue-600">Dish Dash</Link></li>
                    <li className="py-1"><Link href="/services/jacket-blazer" className="hover:text-blue-600">Jacket / Blazer</Link></li>
                  </ul>
                </div>

                {/* Column 3: Suit */}
                <div className="col-span-1 ">
                  <h3 className="font-bold text-sm mb-2">Suit</h3>
                  <ul className="font-poppins text-sm">
                    <li className="py-1"><Link href="/services/jumpsuit" className="hover:text-blue-600">Jumpsuit</Link></li>
                    <li className="py-1"><Link href="/services/suit" className="hover:text-blue-600">Suit</Link></li>
                    <li className="py-1"><Link href="/services/tuxedo" className="hover:text-blue-600">Tuxedo</Link></li>
                    <li className="py-1"><Link href="/services/overcoat" className="hover:text-blue-600">Overcoat</Link></li>
                    <li className="py-1"><Link href="/services/safari-suit" className="hover:text-blue-600">Safari Suit</Link></li>
                    <li className="py-1"><Link href="/services/sports-suit" className="hover:text-blue-600">Sports Suit</Link></li>
                  </ul>
                </div>

                {/* Column 4: Small Items */}
                <div className="col-span-1  ">
                  <h3 className="font-bold text-sm mb-2">Small Items</h3>
                  <ul className="font-poppins text-sm">
                    <li className="py-1"><Link href="/services/undershirt" className="hover:text-blue-600">Undershirt / Vest</Link></li>
                    <li className="py-1"><Link href="/services/handkerchief" className="hover:text-blue-600">Handkerchief</Link></li>
                    <li className="py-1"><Link href="/services/tie" className="hover:text-blue-600">Tie</Link></li>
                    <li className="py-1"><Link href="/services/slacks" className="hover:text-blue-600">Slacks / Stockings</Link></li>
                    <li className="py-1"><Link href="/services/socks" className="hover:text-blue-600">Socks</Link></li>
                    <li className="py-1"><Link href="/services/scarf" className="hover:text-blue-600">Scarf</Link></li>
                    <li className="py-1"><Link href="/services/panties" className="hover:text-blue-600">Panties / Boxers</Link></li>
                    <li className="py-1"><Link href="/services/swimwear" className="hover:text-blue-600">Swimwear</Link></li>
                  </ul>
                </div>

                {/* Column 5: Occasional Wear */}
                <div className="col-span-1 ">
                  <h3 className="font-bold text-sm mb-2">Occasional Wear</h3>
                  <ul className="font-poppins text-sm">
                    <li className="py-1"><Link href="/services/ethnic-wear" className="hover:text-blue-600">Ethnic Wear</Link></li>
                    <li className="py-1"><Link href="/services/party-dress" className="hover:text-blue-600">Party Dress</Link></li>
                    <li className="py-1"><Link href="/services/wedding-dress" className="hover:text-blue-600">Wedding Dress</Link></li>
                    <li className="py-1"><Link href="/services/cocktail-gown" className="hover:text-blue-600">Cocktail Gown</Link></li>
                    <li className="py-1"><Link href="/services/khamis" className="hover:text-blue-600">Khamis</Link></li>
                    <li className="py-1"><Link href="/services/saree" className="hover:text-blue-600">Saree</Link></li>
                    <li className="py-1"><Link href="/services/sherwani" className="hover:text-blue-600">Sherwani</Link></li>
                  </ul>
                </div>

                {/* Column 6: Home Care */}
                <div className="col-span-1 ">
                  <h3 className="font-bold text-sm mb-2">Home Care</h3>
                  <ul className="font-poppins text-sm">
                    <li className="py-1"><Link href="/services/carpet" className="hover:text-blue-600">Carpet</Link></li>
                    <li className="py-1"><Link href="/services/curtains" className="hover:text-blue-600">Curtains</Link></li>
                    <li className="py-1"><Link href="/services/duvet" className="hover:text-blue-600">Duvet</Link></li>
                    <li className="py-1"><Link href="/services/blanket" className="hover:text-blue-600">Blanket</Link></li>
                    <li className="py-1"><Link href="/services/bed-sheet" className="hover:text-blue-600">Bed Sheet</Link></li>
                    <li className="py-1"><Link href="/services/towel" className="hover:text-blue-600">Towel</Link></li>
                    <li className="py-1"><Link href="/services/bath-robe" className="hover:text-blue-600">Bath Robe</Link></li>
                    <li className="py-1"><Link href="/services/table-cloth" className="hover:text-blue-600">Table Cloth</Link></li>
                    <li className="py-1"><Link href="/services/pillows" className="hover:text-blue-600">Pillows</Link></li>
                    <li className="py-1"><Link href="/services/pillow-case" className="hover:text-blue-600">Pillow Case</Link></li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* Mega Menu - Location */}
          <div
            className="relative"
            onMouseEnter={() => setLocationMenuOpen(true)}
            onMouseLeave={() => setLocationMenuOpen(false)}
          >
            <button
              className="nav-link hover:bg-white hover:text-blue-600 px-4 py-2 hover:rounded-lg">
              Locations
            </button>
            {isLocationMenuOpen && (
              <div
                className="absolute top-full left-1/3 transform -translate-x-1/3 bg-white shadow-lg p-6 grid grid-cols-4 gap-6 w-[1000px] z-50"
              >
                {/* Location Categories */}
                <div>
                  
                <ul className="font-poppins text-sm">
                    <li className="py-1">
                      <Link href="/locations/dubai-downtown">
                        Dubai Downtown
                      </Link>
                    </li>
                    <li className="py-1">
                      <Link href="/locations/jlt">Jumeirah Lake Towers</Link>
                    </li>
                    <li className="py-1">
                      <Link href="/locations/marina">Dubai Marina</Link>
                    </li>
                    {/* New Locations Added Below */}
                    <li className="py-1">
                      <Link href="/locations/difc">DIFC</Link>
                    </li>
                    <li className="py-1">
                      <Link href="/locations/downtown">Downtown</Link>
                    </li>
                    <li className="py-1">
                      <Link href="/locations/meydan">Meydan</Link>
                    </li>
                    <li className="py-1">
                      <Link href="/locations/palm">Palm</Link>
                    </li>
                    <li className="py-1">
                      <Link href="/locations/jbr">JBR</Link>
                    </li>
                    <li className="py-1">
                      <Link href="/locations/greens">Greens</Link>
                    </li>
                    <li className="py-1">
                      <Link href="/locations/emirates-hills">Emirates Hills</Link>
                    </li>
                   
                  </ul>
                </div>

 {/* Location Categories */}
 <div>
                  
                  <ul className="font-poppins text-sm">
                  <li className="py-1">
                      <Link href="/locations/meadows">Meadows</Link>
                    </li>
                    <li className="py-1">
                      <Link href="/locations/creek-harbor">Creek Harbor</Link>
                    </li>
                    <li className="py-1">
                      <Link href="/locations/jumeirah-park">Jumeirah Park</Link>
                    </li>
                    <li className="py-1">
                      <Link href="/locations/blue-water-island">Blue Water Island</Link>
                    </li>
                    <li className="py-1">
                      <Link href="/locations/jumeirah-golf">Jumeirah Golf</Link>
                    </li>
                    <li className="py-1">
                      <Link href="/locations/production-city">Production City</Link>
                    </li>
                    <li className="py-1">
                      <Link href="/locations/tcom">TCOM</Link>
                    </li>
                    <li className="py-1">
                      <Link href="/locations/damac-hills">Damac Hills</Link>
                    </li>
                    <li className="py-1">
                      <Link href="/locations/discovery-gardens">Discovery Gardens</Link>
                    </li>
                    </ul>
                  </div>
            
               <div>

                <ul className="font-poppins text-sm">
                  <li className="py-1">
                    <Link href="/locations/springs">Springs</Link>
                  </li>
                  <li className="py-1">
                    <Link href="/locations/arabian-ranches">Arabian Ranches</Link>
                  </li>
                  <li className="py-1">
                    <Link href="/locations/remraam">Remraam</Link>
                  </li>
                  <li className="py-1">
                    <Link href="/locations/al-barsha">Al Barsha</Link>
                  </li>
                  <li className="py-1">
                    <Link href="/locations/barsha-heights">Barsha Heights</Link>
                  </li>
                  <li className="py-1">
                    <Link href="/locations/jvc">JVC</Link>
                  </li>
                  <li className="py-1">
                    <Link href="/locations/jlt">JLT</Link>
                  </li>
                  <li className="py-1">
                    <Link href="/locations/arjan">Arjan</Link>
                  </li>
                  <li className="py-1">
                    <Link href="/locations/sports-city">Sports City</Link>
                  </li>
              </ul>
              </div>

                <div>
                 
                 <ul className="font-poppins text-sm">

                 <li className="py-1">
                    <Link href="/locations/umm-suqeim">Abu Dhabi</Link>
                  </li>

                  <li className="py-1">
                    <Link href="/locations/umm-suqeim">Umm Suqeim</Link>
                  </li>
                  <li className="py-1">
                    <Link href="/locations/dip">DIP</Link>
                  </li>
                  <li className="py-1">
                    <Link href="/locations/bur-dubai">Bur Dubai</Link>
                  </li>
                  <li className="py-1">
                    <Link href="/locations/business-bay">Business Bay</Link>
                  </li>
                  <li className="py-1">
                    <Link href="/locations/dubai-hills">Dubai Hills</Link>
                  </li>
                  <li className="py-1">
                    <Link href="/locations/motor-city">Motor City</Link>
                  </li>
                  <li className="py-1">
                    <Link href="/locations/dubai-land">Dubai Land</Link>
                  </li>
                  <li className="py-1">
                    <Link href="/locations/al-furjan">Al Furjan</Link>
                  </li>
                </ul>
              </div>

              </div>
            )}
          </div>
          <Link
            href="/pages/offers/"
            className="nav-link hover:bg-white hover:text-blue-600 px-4 py-2 hover:rounded-lg"
          >
            Offers
          </Link>
          <Link
            href="/pages/businesspage/"
            className="nav-link hover:bg-white hover:text-blue-600 px-4 py-2 hover:rounded-lg"
          >
            Price
          </Link>
          <Link
            href="/pages/FAQpage/"
            className="nav-link hover:bg-white hover:text-blue-600 px-4 py-2 hover:rounded-lg"
          >
            FAQ
          </Link>
        </div>

        {/* WhatsApp Section */}
        <span onClick={handleClick}>
          <Link
            href={`https://wa.me/${phoneNumber}?text=${encodedMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-left text-md"
          >
            <div className="flex items-center space-x-1">
              <div className="flex">
                <img
                  src="/whatsappQRcode.png"
                  width={70}
                  className="p-1"
                  alt="WhatsApp QR Code"
                />
                <img
                  src="/whatsappicon.png"
                  width={70}
                  alt="WhatsApp Icon"
                />
              </div>
              <div className="flex flex-col w-[220px]">
                <strong>Schedule a free pickup now</strong>
                <span>+971 58 9920080</span>
              </div>
            </div>
          </Link>
        </span>
      </div>
    </>
  );
};

export default DesktopNavbar;
