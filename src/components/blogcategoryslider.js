import React, { useEffect, useState, useRef } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import Loader from '../app/Loader';
import Image from "next/image";

const NewBlogCategorySlider = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const sliderRef = useRef(null);

  useEffect(() => {
    fetch('/api/categories') // Adjust the path as necessary
      .then(response => response.json())
      .then(data => {
        setCategories(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching categories:', error);
        setError(error);
        setLoading(false);
      });
  }, []);

  const scroll = (direction) => {
    if (sliderRef.current) {
      const { scrollLeft, clientWidth } = sliderRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      sliderRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  if (loading) return <div><Loader/></div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="relative w-full">
      <button className="absolute left-0 z-10 top-1/2 -translate-y-1/2" onClick={() => scroll('left')}>
        <MdChevronLeft size={30} />
      </button>
      <div className="overflow-hidden" ref={sliderRef}>
        <div className="flex">
          {categories.map((category, index) => (
            <div key={index} className="flex-shrink-0 p-4" style={{ width: '20%' }}>
              <div className="border rounded-lg p-2">
                <Image
                 width={1000}
                  height={1000}
                     src={category.image} alt={category.title} className="h-32 w-full object-cover"/>
                <h4 className="text-center">{category.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button className="absolute right-0 z-10 top-1/2 -translate-y-1/2" onClick={() => scroll('right')}>
        <MdChevronRight size={30} />
      </button>
    </div>
  );
};

export default NewBlogCategorySlider;
