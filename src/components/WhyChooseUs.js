'use client';
import React from 'react';

const WhyChooseUs = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
          Premium Laundry & Dry Cleaning Services in Dubai
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          Swabi Laundry offers <span className="font-semibold text-blue-600">same-day laundry service</span> in Dubai with 
          <span className="font-semibold text-green-600"> free pickup & delivery</span>. As professional dry cleaners, 
          we use <span className="font-semibold text-blue-600">eco-friendly detergents</span> for affordable, 
          top-quality cleaning and professional finishing.
        </p>
      </div>

     {/* Services Grid */}
<div className="mb-16">
  <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Premium Services</h2>

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
    {[
      { icon: '🛏️', title: 'HomeCare Bedding Laundry', desc: 'Professional mattress cleaning & duvet washing service in Dubai' },
      { icon: '👔', title: 'Dry Cleaning Services Dubai', desc: 'Expert suit cleaning & formal wear maintenance' },
      { icon: '👕', title: 'Eco-Friendly Wash & Fold', desc: 'Affordable weekly laundry service with organic detergents' },
      { icon: '👞', title: 'Luxury Shoe Cleaning Dubai', desc: 'Premium leather shoe care & sneaker restoration' },
      { icon: '⏱️', title: 'Same-Day Pressing Service', desc: 'Emergency garment ironing & quick turnaround' },
      { icon: '👶', title: 'Baby Clothes Sanitization', desc: 'Hypoallergenic cleaning for delicate infant wear' },
      { icon: '🎩', title: 'Designer Garment Care', desc: 'Specialized cleaning for luxury fashion items' },
      { icon: '👜', title: 'Handbag & Leather Care', desc: 'Luxury accessory cleaning & conditioning' },
      { icon: '🏨', title: 'Hotel Linen Service', desc: 'Commercial laundry solutions for hospitality businesses' },
      { icon: '🧥', title: 'Winter Coat Cleaning', desc: 'Seasonal wool coat maintenance & storage preparation' },
      { icon: '🛋️', title: 'Eco Curtain Cleaning Dubai', desc: 'Chemical-free curtain washing & drape refresh' },
      { icon: '👗', title: 'Wedding Dress Preservation', desc: 'Bridal gown cleaning & archival packaging' },
      { icon: '⚽', title: 'Sports Gear Cleaning', desc: 'Odor removal & performance wear maintenance' },
      { icon: '🧶', title: 'Cashmere & Wool Care', desc: 'Specialist hand-washing for delicate knits' },
      { icon: '👖', title: 'Denim Cleaning Service', desc: 'Color-preserving jeans washing & repair' }
    ].map((service, idx) => (
      <div key={idx} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="text-4xl mb-4">{service.icon}</div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
        <p className="text-gray-600">{service.desc}</p>
      </div>
    ))}
  </div>
</div>


     {/* Why Choose Us */}
<div className="bg-blue-50 rounded-2xl p-8 mb-16">
  <p className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Choose Swabi Laundry?</p>
  <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
    {[
      { icon: '🚚', title: '24/7 Pickup & Delivery', desc: 'Flexible scheduling that works around your routine' },
      { icon: '🌿', title: 'Eco-Friendly Solutions', desc: 'Non-toxic, biodegradable detergents for safe cleaning' },
      { icon: '👩🔬', title: 'Expert Garment Care', desc: 'Professionally trained specialists handling your clothes' },
      { icon: '💰', title: 'Affordable Pricing', desc: 'Premium service at budget-friendly rates' },
      { icon: '⚡', title: 'Same-Day Laundry Service', desc: 'Express cleaning for urgent garment needs' },
      { icon: '🔬', title: 'Advanced Stain Removal', desc: 'State-of-the-art techniques for tough stain removal' },
      { icon: '🛡️', title: 'Fabric Protection', desc: 'Gentle, fabric-safe processes for long-lasting clothes' },
      { icon: '🏠', title: 'Home & Hotel Laundry', desc: 'Convenient cleaning solutions for homes & businesses' }
    ].map((feature, idx) => (
      <div key={idx} className="text-center">
        <div className="text-4xl mb-4">{feature.icon}</div>
        <p className="text-xl font-semibold mb-2">{feature.title}</p>
        <p className="text-gray-600">{feature.desc}</p>
      </div>
    ))}
  </div>
</div>


      {/* CTA Section */}
      <div className="text-center bg-gradient-to-r from-blue-600 to-green-500 rounded-2xl p-8 shadow-xl">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4">Ready for Spotless Clothes?</h2>
          <p className="text-xl text-white/90 mb-8">Schedule your pickup now or speak with our experts</p>
          <a href="tel:+971589920080" className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-colors duration-300">
            📞 Call Now: +971 58 992 0080
          </a>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
