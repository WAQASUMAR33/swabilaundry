"use client"
import { useState } from "react";

const services = [
  {
    name: "Premium Dry Cleaning",
    description: "Experience the finest garment care with our Premium Dry Cleaning, ensuring deep cleaning, fabric protection, and a flawless finish. Trust us for freshness, precision, and a like-new look every time!",
    image: "/homepage/1.jpg",
    icon: "/icons/wardrobe.png",
  },
  {
    name: "Everyday Wear Laundry",
    description: "Keep your everyday clothes fresh and clean with our Everyday Wear Laundry service, ensuring gentle yet effective washing. Enjoy soft, stain-free, and perfectly cared-for garments every day!",
    image: "/homepage/2.jpg",
    icon: "/icons/shirt.png",
  },
  {
    name: "Wash & Fold Service",
    description: "Enjoy hassle-free laundry with our Wash & Fold Service, where we carefully clean, dry, and neatly fold your clothes. Fresh, ready-to-wear garments delivered with ease!",
    image: "/homepage/3.jpg",
    icon: "/icons/clean-clothes.png",
  },
  {
    name: "Household Fabric Care",
    description: "Keep your home fresh and clean with our Household Fabric Care service, expertly cleaning bedding, curtains, and more. Enjoy soft, spotless fabrics for a healthier living space!",
    image: "/homepage/4.jpg",
    icon: "/icons/speaker.png",
  },
  {
    name: "Wedding Dress Cleaning",
    description: "Preserve the beauty of your gown with our Wedding Dress Cleaning service, using expert care to remove stains and protect delicate fabrics. Cherish your memories with a gown that looks as radiant as your special day!",
    image: "/homepage/5.jpg",
    icon: "/icons/wedding.png",
  },
  {
    name: "Outerwear & Jacket Care",
    description: "Keep your coats and jackets fresh with our Outerwear & Jacket Care service, ensuring deep cleaning and fabric protection. Stay warm, stylish, and ready for any season!",
    image: "/homepage/6.jpg",
    icon: "/icons/jacket.png",
  },
  {
    name: "Expert Alterations",
    description: "Get the perfect fit with our Expert Alterations service, offering precise tailoring for all your garments. From minor adjustments to custom tailoring, we ensure you look and feel your best!",
    image: "/homepage/7.jpg",
    icon: "/icons/sewing-machine.png",
  },
  {
    name: "Shoe & Sneaker Cleaning",
    description: "Revive your footwear with our Shoe & Sneaker Cleaning service, removing dirt, stains, and odors for a fresh, like-new look. Step out in confidence with spotless, well-cared-for shoes!",
    image: "/homepage/8.jpg",
    icon: "/icons/shoes.png",
  },
];

const LaundryServices = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="bg-gray-100 py-16 px-6 w-full">
      <h2 className="text-center text-4xl font-bold text-[#92C644] mb-8">
        OUR SERVICES
      </h2>

      {/* 3 Cards Per Row Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-screen-2xl mx-auto px-10">
        {services.map((service, index) => (
          <div
            key={index}
            className={`bg-white shadow-xl rounded-lg overflow-hidden transform transition duration-300 ${
              hoveredIndex === index ? "scale-105 shadow-2xl" : ""
            }`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Image with Icon Overlay */}
            <div className="relative">
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-80 object-cover transition-transform duration-300"
              />
              <div
                className="absolute bottom-0 right-0 bg-[#FFF] p-4 rounded-tl-lg transition-transform duration-300"
                style={{
                  transform: hoveredIndex === index ? "rotate(10deg)" : "rotate(0deg)",
                }}
              >
                <img src={service.icon} alt="Icon" className="w-12 h-12" />
              </div>
            </div>

            {/* Service Details */}
            <div className="p-6 text-center">
              <h3 className="text-2xl font-semibold text-[#92C644]">{service.name}</h3>
              <p className="text-gray-600 text-lg mt-3">{service.description}</p>

              {/* Button */}
              <a
                href="#"
                className="inline-block mt-6 bg-[#92C644] text-white px-6 py-3 rounded-lg text-lg font-medium transition duration-300 transform hover:bg-green-700 hover:scale-105"
              >
                Read More Info →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LaundryServices;
