import React from 'react';
import { FaStar } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Elena',
    designation: '',
    testimonial: 'The customer service at Swabi Laundry is top-notch. The staff is friendly, knowledgeable, and goes out of their way to ensure I\'m satisfied. They even offer free pickup and delivery, which is a major convenience. And their prices are the best I\'ve found in the Sports City area.',
    image: '/businessman.png',
    rating: 5,
  },
  {
    name: 'Uthphal',
    designation: '',
    testimonial: 'As a busy professional, I was looking for a laundry service that could handle my needs efficiently and economically. Swabi Laundry has exceeded all my expectations. Their prices are very affordable and the staff is so responsive and goes above and beyond to ensure I\'m completely satisfied.',
    image: '/businessman.png',
    rating: 4.5,
  },
  {
    name: 'Tariq',
    designation: '',
    testimonial: 'I was hesitant to try a new laundry service, but I\'m so glad I gave Swabi Laundry a shot. The quality of their work is unmatched - my Kandooras have never looked cleaner or felt softer. And their prices are incredibly affordable, especially for the level of service they provide.',
    image: '/businessman.png',
    rating: 5,
  },
];

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="flex">
      {[...Array(fullStars)].map((_, i) => (
        <FaStar key={i} className="text-yellow-500" />
      ))}
      {halfStar && <FaStar className="text-yellow-500 half-star" />}
      {[...Array(emptyStars)].map((_, i) => (
        <FaStar key={i + fullStars} className="text-gray-300" />
      ))}
    </div>
  );
};

const TestimonialCard = ({ name, designation, testimonial, image, rating, isLast }) => (
  <div className="flex flex-row items-center">
    <div className="max-w-sm rounded-lg overflow-hidden p-6 bg-white flex flex-col items-center mb-8">
      <div className="text-center px-4">
        <div className="font-bold text-xl mt-2 mb-1">{name}</div>
        <span className="text-gray-600 text-lg mb-2">{designation}</span>
        <p className="text-gray-700 mb-4 text-md">" {testimonial}"</p>
      </div>
      <StarRating rating={rating} />
    </div>
    {!isLast && (
      <div className='hidden lg:block border-black border-r rounded-full border-[1px] h-[200px] my-auto opacity-20'></div>
    )}
  </div>
);

const Testimonials = () => {
  return (
    <>
      <h1 className="text-4xl font-bold text-center py-10 text-gray-800">What customers say about us</h1>
      <div className="container mx-auto px-4 flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              {...testimonial}
              isLast={index === testimonials.length - 1}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Testimonials;
