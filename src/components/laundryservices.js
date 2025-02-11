const services = [
  { name: "Premium Dry Cleaning", icon: "/icons/wardrobe.png" },
  { name: "Everyday Wear Laundry", icon: "/icons/shirt.png" },
  { name: "Wash & Fold Service", icon: "/icons/clean-clothes.png" },
  { name: "Household Fabric Care", icon: "/icons/speaker.png" },
  { name: "Wedding Dress Cleaning", icon: "/icons/wedding.png" },
  { name: "Outerwear & Jacket Care", icon: "/icons/jacket.png" },
  { name: "Expert Alterations", icon: "/icons/sewing-machine.png" },
  { name: "Shoe & Sneaker Cleaning", icon: "/icons/shoes.png" },
];

const LaundryServices = () => {
  return (
    <div className="text-center py-10 bg-gradient-to-b from-blue-50 to-white px-6">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
        Professional Laundry & Cleaning Services
      </h2>
      <p className="text-gray-600 text-sm sm:text-base mb-8 max-w-2xl mx-auto">
        Experience hassle-free laundry with expert dry cleaning, wash & fold, and specialized garment care services.
      </p>

      {/* Grid container with auto-adjusting columns */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
        {services.map((service) => (
          <a
            key={service.name}
            href="https://wa.me/971589920080"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform transform hover:scale-105"
          >
            <div className="flex flex-col items-center justify-center bg-white rounded-xl shadow-lg p-5 hover:shadow-2xl 
              w-full min-w-[120px] sm:min-w-[140px] md:min-w-[160px] h-36 sm:h-40 md:h-44 lg:h-48 xl:h-52"
            >
              <img src={service.icon} alt={service.name} className="h-12 sm:h-14 md:h-16 mb-3" />
              <p className="text-sm sm:text-base font-semibold text-gray-800 text-center">
                {service.name}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default LaundryServices;
