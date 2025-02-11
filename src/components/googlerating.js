// components/GoogleRating.js
'use client'
import { useEffect, useState } from 'react';
import axios from 'axios';

const GoogleRating = ({ placeId, apiKey }) => {
  const [rating, setRating] = useState(null);

  useEffect(() => {
    const fetchRating = async () => {
      try {
        const response = await axios.get(
          `https://places.googleapis.com/v1/places/ChIJ05IRjKHxEQ0RJLV_5NLdK2w?fields=id&key=AIzaSyCHpj7zdMIzGEAtr6u_FjvGZO76-T73hLI`
        );
        const { rating } = response.data.result;
        setRating(rating);
      } catch (error) {
        console.error('Error fetching rating:', error);
      }
    };

    fetchRating();
  }, [placeId, apiKey]);

  return (
    <div className="flex items-center bg-blue-800 p-2 rounded-full text-white font-sans">
      <div
        className="bg-contain bg-no-repeat w-5 h-5 mr-2"
        style={{
          backgroundImage: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png)',
        }}
      ></div>
      {rating && (
        <>
          <div className="text-lg mr-1">{rating}</div>
          <div className="flex">
            {Array.from({ length: 5 }, (_, index) => (
              <span
                key={index}
                className={`text-lg ${index < Math.floor(rating) ? 'text-yellow-500' : 'text-gray-300'}`}
              >
                ★
              </span>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default GoogleRating;
