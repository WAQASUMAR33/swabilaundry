import React from 'react';
import PropTypes from 'prop-types';

const Productpropcomponent = ({ image, icon, icon2, icondescription, icondescription2, benefit, title, description1, description2, description3, align }) => {
  return (
    <div className={`flex flex-col justify-center gap-6 p-6 md:p-10 ${align === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
      <div className="flex-shrink-0 max-w-full md:max-w-[50%]">
        <img src={image} alt="Feature" className="w-full h-auto rounded-lg" />
      </div>
      <div className="flex flex-col gap-4 text-center md:text-left md:w-[50%]">
        <h2 className="text-xl md:text-2xl font-bold text-gray-600">{benefit}</h2>
        <p className="text-2xl md:text-4xl font-semibold font-poppins">{title}</p>
        <div className="text-lg">
          <p className="text-base md:text-lg">{description1}</p>
          <p className="text-base md:text-lg">{description2}</p>
          <p className="text-base md:text-lg">{description3}</p>
          <div className="flex items-center gap-2 mt-4">
            <div className="flex items-center gap-1">
              {icon}
              <div className="font-bold text-base">{icondescription}</div>
            </div>
            <div className="flex items-center gap-1">
              {icon2}
              <div className="font-bold text-base">{icondescription2}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Productpropcomponent.propTypes = {
  benefit: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  icondescription: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description1: PropTypes.string.isRequired,
  description2: PropTypes.string.isRequired,
  description3: PropTypes.string.isRequired,
  align: PropTypes.oneOf(['left', 'right']).isRequired,
};

export default Productpropcomponent;
