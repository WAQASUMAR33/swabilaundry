'use client'
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FaTimes } from 'react-icons/fa';

const OfferDialog = ({ googleMapsUrl, locationName }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [rating, setRating] = useState(null);
  const [placeId, setPlaceId] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 30000); // 30 seconds
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const fetchPlaceId = async () => {
      try {
        const response = await fetch(`/api/googlerating?locationName=${encodeURIComponent(locationName)}`);
        const data = await response.json();
        if (data.placeId) {
          setPlaceId(data.placeId);
        } else {
          setRating('4.8');
        }
      } catch (error) {
        console.error('Error fetching place ID:', error);
        setRating('4.8');
      }
    };

    if (locationName) {
      fetchPlaceId();
    }
  }, [locationName]);

  useEffect(() => {
    const fetchGoogleRating = async () => {
      if (!placeId) return;

      try {
        const response = await fetch(
          `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=rating&key=AIzaSyCHpj7zdMIzGEAtr6u_FjvGZO76-T73hLI` // Replace with your actual API key
        );

        const data = await response.json();
        if (data.result && data.result.rating) {
          setRating(data.result.rating);
          console.log(data.result.rating)
        } else {
          setRating('N/A');
        }
      } catch (error) {
        console.error('Error fetching Google rating:', error);
        setRating('N/A');
      }
    };

    fetchGoogleRating();
  }, [placeId]);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-80 z-50">
      <div className="relative bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 ease-in-out w-full max-w-4xl mx-4">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-700 hover:text-gray-900 transition-colors duration-300"
        >
          <FaTimes size={24} />
        </button>
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 h-64 md:h-auto">
            <img
              src="/newvan2.png"
              alt="Swabi Laundry Van"
              className="md:object-cover object-contain md:p-0 p-4 w-full h-full"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center p-8">
            <div className="flex flex-col items-center md:items-start mb-4">
              <img src='/google.png' width={100} height={100} alt="Google Logo" className="mb-2 " />
              <div className="flex items-center">
                <span className="text-yellow-500 text-2xl md:text-3xl lg:text-4xl">★ ★ ★ ★ ★</span>
                <span className="ml-2 text-xl md:text-2xl lg:text-3xl  text-gray-700">
                 <strong> {rating !== null ? `${rating} Stars` : 'Loading...'}</strong>
                </span>
              </div>
            </div>
            <p className="text-gray-600 text-base md:text-lg lg:text-xl mb-4">CUSTOMER RATING</p>
            <div className="mb-4">
              <p className="text-green-600 font-semibold text-lg md:text-xl">Free Pickup & Delivery</p>
              <p className="text-gray-700 text-base md:text-lg">20% off on your first 3 orders</p>
              <p className="text-gray-700 text-base md:text-lg">No Hidden Costs</p>
              <p className="text-gray-700 text-base md:text-lg">Quick and Reliable Service</p>
            </div>
            <div className="flex flex-col md:flex-row items-center md:items-start">
              <a
                href="tel:+971585927959"
                className="w-full md:w-auto text-base bg-gradient-to-r from-green-400 to-green-500 text-white font-bold py-2 px-4 rounded mb-2 md:mb-0 md:mr-2 text-center hover:from-green-500 hover:to-green-600 transition-all duration-300"
              >
                +971-585927959
              </a>
              <a href="https://wa.me/971589920080"  className="w-full md:w-auto text-base bg-gradient-to-r from-blue-400 to-blue-500 text-white font-bold py-2 px-4 rounded text-center hover:from-blue-500 hover:to-blue-600 transition-all duration-300">
          
                Order Now
             
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

OfferDialog.propTypes = {
  googleMapsUrl: PropTypes.string,
  locationName: PropTypes.string.isRequired,
};

export default OfferDialog;
