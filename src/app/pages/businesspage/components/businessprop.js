
import React from 'react';
import PropTypes from 'prop-types';

const Businesscomponent = ({
  image,
  name,
  label,
  description,
  icon1,
  icon2,
  icon3,
  iconDescription1,
  iconDescription2,
  iconDescription3,
  align
}) => {
  return (
    <div className={`flex flex-col mt-10 justify-center gap-10 p-6 md:px-40 md:py-10 ${align === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
      <div className="flex-shrink-0 max-w-full md:max-w-[50%]">
        <img src={image} alt={name} className="w-[700px] h-auto rounded-lg" />
      </div>
      <div className="flex flex-col gap-4 text-center md:text-left md:w-[50%]">
        <h2 className="text-xl md:text-2xl font-bold text-gray-600">{label}</h2>
        <p className="text-2xl md:text-4xl font-semibold ">{name}</p>
        <div className="text-lg">
          <p className="text-base md:text-lg">{description}</p>
          <div className="flex items-center gap-4 mt-4 justify-center md:justify-start">
            <div className="flex items-center gap-1">
              {icon1}
              <div className="font-bold text-base">{iconDescription1}</div>
            </div>
            <div className="flex items-center gap-1">
              {icon2}
              <div className="font-bold text-base">{iconDescription2}</div>
            </div>
            <div className="flex items-center gap-1">
              {icon3}
              <div className="font-bold text-base">{iconDescription3}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Businesscomponent.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon1: PropTypes.element.isRequired,
  icon2: PropTypes.element.isRequired,
  icon3: PropTypes.element.isRequired,
  iconDescription1: PropTypes.string.isRequired,
  iconDescription2: PropTypes.string.isRequired,
  iconDescription3: PropTypes.string.isRequired,
  align: PropTypes.oneOf(['left', 'right']).isRequired,
};

export default Businesscomponent;
