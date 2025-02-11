import React from 'react';
import PropTypes from 'prop-types';

const Productpropcomponent = ({ image, name, title, description1, description2, description3, align }) => {
  return (
    <div className={`flex w-full flex-col md:flex-row items-start mt-[110px] gap-5 ${align === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
      <div className="flex-shrink-0 md:w-1/2 px-5 pb-5">
        <img src={image} alt="Feature" className="h-auto rounded-2xl " />
      </div>
      <div className="flex flex-col md:w-1/2 gap-4 px-4 md:px-10 pt-10">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-600">{name}</h2>
        <p className="text-xl md:text-2xl font-semibold font-poppins">{title}</p>
        <div className="text-lg">
          <p className="py-3">{description1}</p>
          <p className="py-3">{description2}</p>
          <p className="py-3">{description3}</p>
        </div>
      </div>
    </div>
  );
};

Productpropcomponent.propTypes = {
  image: PropTypes.string.isRequired,
  imageWidth: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description1: PropTypes.string.isRequired,
  description2: PropTypes.string.isRequired,
  description3: PropTypes.string.isRequired,
  align: PropTypes.oneOf(['left', 'right']).isRequired,
};

export default Productpropcomponent;
