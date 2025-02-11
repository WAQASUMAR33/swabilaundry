'use client'
import React from 'react';
import { ArrowRight } from 'react-feather';

// Define the mapping of items to their respective icons
const iconMap = {
  'Shirt': '/icons/shirt.png',
  'Blouse': '/icons/blouse (1).png',
  'T-Shirt': '/icons/shirt.png',
  'Waist coat': '/icons/waist-coat (1).png',
  'Ghatra': '/icons/towel.png',
  'Trouser': '/icons/trouser (1).png',
  'Jeans': '/icons/jeans (1).png',
  'Skirt': '/icons/skirt (2).png',
  'Cardigan': '/icons/cardigan (2).png',
  'Pyjama': '/icons/pyjamas (2).png',
  'Leggings': '/icons/leggins.png',
  'Casual Dress / Kurta': '/icons/dress.png',
  'Pullover': '/icons/pullover.png',
  'Short Dress': '/icons/dress (1).png',
  'Kurta': '/icons/kurta.png',
  'Blazer': '/icons/blazer (2).png',
  'Jumpsuit': '/icons/jumpsuit.png',
  'Suit (2 or 3 pcs)': '/icons/suit.png',
  'Formal / Long Dress': '/icons/long-dress.png',
  'Tuxedo (2 or 3 pcs)': '/icons/tuxedo.png',
  'Blazer x 2': '/icons/blazer (2).png',
  'Overcoat': '/icons/overcoat.png',
  'Safari / SportsSuit (2 pcs)': '/icons/suit.png',
  'Brassiere': '/icons/brassiere.png',
  'Undershirt': '/icons/shirt.png',
  'Handkerchief': '/icons/handkerchief.png',
  'Tie': '/icons/suit.png',
  'Slacks': '/icons/slack.png',
  'Stockings': '/icons/leggins.png',
  'Scarf': '/icons/scarf.png',
  'Underwear': '/icons/underwear.png',
  'Swimwear': '/icons/costume.png',
  'Abaya': '/icons/abaya.png',
  'Dish Dash': '/icons/dress.png',
  'Kandoura': '/icons/dress.png',
  'Ethnic wear (1-2 pcs)': '/icons/dress.png',
  'Party Dress': '/icons/dress.png',
  'Cocktail Gown': '/icons/cocktail.png',
  'Salwar Suit (1-3 pcs)': '/icons/suit.png',
  'Saree (1-3 pcs)': '/icons/saree.png',
  'Sherwani (1-3 pcs)': '/icons/suit.png',
  'Carpet': '/icons/prayer.png',
  'Curtains': '/icons/curtains.png',
  'Blanket': '/icons/blanket.png',
  'Duvet': '/icons/blanket.png',
  'Bed sheet': '/icons/bed-sheets.png',
  'Towel': '/icons/towel.png',
  'Table Mat': '/icons/place-mat.png',
  'Bath robe': '/icons/bathrobe.png',
  'Table Cloth': '/icons/place-mat.png',
  'Pillows': '/icons/pillows.png',
  'Pillow Case': '/icons/pillow.png',
};

const pricingData = [
  {
    title: 'Tops and Bottoms',
    pressOnly: 'AED 5',
    cleanAndPress: 'AED 10',
    items: [
      ['Shirt', 'Blouse', 'T-Shirt', 'Waist coat', 'Ghatra','Trouser', 'Jeans', 'Skirt', 'Cardigan', 'Pyjama', 'Leggings']
    ]
  },
  {
    title: 'One Piece / Short Dresses',
    pressOnly: 'AED 10',
    cleanAndPress: 'AED 20',
    items: [
      ['Casual Dress / Kurta', 'Pullover', 'Short Dress', 'Kurta', 'Blazer', 'Jumpsuit']
    ]
  },
  {
    title: 'Suits',
    pressOnly: 'AED 20',
    cleanAndPress: 'AED 40',
    items: [
      ['Suit (2 or 3 pcs)', 'Formal / Long Dress', 'Tuxedo (2 or 3 pcs)', 'Blazer x 2', 'Overcoat', 'Safari / SportsSuit (2 pcs)']
    ]
  },
  {
    title: 'Delicates & Small Items',
    pressOnly: 'AED 2',
    cleanAndPress: 'AED 4',
    items: [
      ['Brassiere', 'Undershirt', 'Handkerchief', 'Tie', 'Slacks', 'Stockings','Scarf', 'Underwear', 'Swimwear']
    ]
  },
  {
    title: 'Traditional/Occasional Wear',
    pressOnly: 'Starts from AED 7',
    cleanAndPress: 'Starts from AED 15',
    items: [
      ['Abaya', 'Dish Dash', 'Kandoura', 'Ethnic wear (1-2 pcs)', 'Party Dress','Cocktail Gown', 'Salwar Suit (1-3 pcs)', 'Saree (1-3 pcs)', 'Sherwani (1-3 pcs)']
    ]
  },
  {
    title: 'Home Care',
    pressOnly: 'Itemized pricing applicable',
    cleanAndPress: '',
    items: [
      ['Carpet', 'Curtains', 'Blanket', 'Duvet', 'Bed sheet','Towel', 'Table Mat', 'Bath robe', 'Table Cloth', 'Pillows', 'Pillow Case']
    ]
  }
];

const PricingSection = () => {
  return (
    <div className="bg-gray-100 p-5 md:p-20 ">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-16">
          {/* <span className="text-pink-600 bg-pink-200 px-4 py-1 rounded">No 1 Laundry Service In Dubai</span> */}
          <h2 className="text-3xl md:text-4xl font-bold mt-4">
            Fair Pricing<span className="bg-gradient-to-r from-pink-500 to-yellow-500 text-transparent bg-clip-text"> Guaranteed</span>
          </h2>
          <p className="mt-2 text-sm md:text-lg">In case your laundry price is lower, we will match it and offer 10% cashback on the order. Our mission is to offer you the best price without compromising quality and service.</p>
          <p className="mt-2 text-sm md:text-lg">We have <strong>clubbed</strong> your daily laundry items into <strong>6 categories</strong> to provide you with easy to navigate and pocket-friendly price options.</p>
          <p className="mt-2 text-sm md:text-lg"><strong>Pay a flat rate</strong> for all the items within your favorite category.</p>
          <p className="mt-2 text-sm md:text-lg">Our minimum order value is AED 50.No other service charges or hidden charges.</p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {pricingData.map((category, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-4 md:p-6 flex flex-col justify-between transform transition-transform hover:scale-105 hover:bg-blue-50">
              <div>
                <div className="border-b-2 pb-2 mb-2">
                  <h3 className="text-xl md:text-2xl font-bold">{category.title}</h3>
                  <p className="text-gray-500">{category.pressOnly && `Press Only: ${category.pressOnly}`}</p>
                  <p className="text-gray-500">{category.cleanAndPress && `Clean & Press: ${category.cleanAndPress}`}</p>
                </div>
                <div className="flex flex-wrap">
                  {category.items.map((sublist, subIndex) => {
                    const half = Math.ceil(sublist.length / 2);
                    const firstHalf = sublist.slice(0, half);
                    const secondHalf = sublist.slice(half);
                    return (
                      <div key={subIndex} className="w-full mb-4 flex flex-wrap">
                        <ul className="w-1/2">
                          {firstHalf.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-center mb-2 text-sm">
                              <img src={iconMap[item]} alt={item} className="w-8 h-8 mr-2 p-[2px] filter filter-customBlue hover:filter-none" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                        <ul className="w-1/2">
                          {secondHalf.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-center mb-2 text-sm">
                              <img src={iconMap[item]} alt={item} className="w-8 h-8 mr-2 p-[2px] filter filter-customBlue hover:filter-none" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="text-center mt-4">
              <a href="https://wa.me/971589920080" target="_blank">
                <button className="bg-blue-600 text-white flex justify-center mx-auto px-4 py-2 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-pink-600 focus:ring-opacity-50 rounded-lg">
                  Order Now <ArrowRight className="ml-2" />
                </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
