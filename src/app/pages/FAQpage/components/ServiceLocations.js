import { FaMapMarkerAlt } from "react-icons/fa";

const locations = [
  "Dubai Marina", "DIFC", "Downtown", "Meydan", "Palm Jumeirah", "JBR", "Greens", "Emirates Hills",
  "Springs", "DIP", "Arabian Ranches", "Remraam", "Al Barsha", "Barsha Heights", "Umm Suqeim",
  "Bur Dubai", "Business Bay", "Dubai Hills", "Motor City", "Dubai Land", "Al Furjan",
  "Jumeirah Park", "Blue Water Island", "Jumeirah Golf Estates", "Production City", "TCOM", "Damac Hills"
];

export default function ServiceLocations() {
  return (
    <section className="container mx-auto px-6 py-16 relative">
      {/* Customer Support Section */}
      <div className="text-center text-gray-700 text-sm mb-4">
        Any question not answered/cleared up? Ask our Customer Service Team
      </div>
      <div className="text-center mb-6">
        <a
          href="tel:+971589920080"
          className="text-green-600 font-semibold text-lg transition duration-300 hover:text-green-500 active:text-green-700"
        >
          📞 Swabi Laundry Support
        </a>
      </div>

      {/* Heading with Natural Keywords */}
      <h2 className="text-3xl font-bold text-center mb-4">Reliable Laundry & Dry Cleaning Service in Dubai</h2>

      {/* User-Focused Content with SEO-Optimized Keywords */}
      <p className="text-center text-lg max-w-3xl mx-auto mb-10">
        Need a <strong>fast and affordable laundry service in Dubai?</strong> Swabi Laundry offers
        <strong> wash, dry cleaning, and ironing services</strong> with **free pickup & delivery**.
        We use **eco-friendly detergents** to ensure your clothes are fresh and well-maintained.
      </p>

      {/* Grid Layout */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <img src="/locations/swabi_locations.jpg" alt="Swabi Laundry - Fast Laundry Pickup and Delivery in Dubai" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {locations.map((location, index) => (
            <div key={index} className="flex items-center space-x-2">
              <FaMapMarkerAlt className="text-green-600" />
              <span>{location}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
