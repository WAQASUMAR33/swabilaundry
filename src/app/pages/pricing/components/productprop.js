import React from 'react';
import PropTypes from 'prop-types';

const Productpropcomponent = ({ image, imageWidth, icon, icon2, icondescription, icondescription2, benefit, title, description1, description2, description3, align }) => {
  return (
    <div className={`flex flex-col md:flex-row items-start gap-5 ${align === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'} p-5 md:p-10`}>
      <div className="flex-shrink-0 md:w-1/2">
        <img src={image} alt="Feature" className="h-auto rounded-2xl" style={{ maxWidth: imageWidth }} />
      </div>
      <div className="flex flex-col md:w-1/2 gap-4">
        <h2 className="text-xl font-bold text-gray-600">{benefit}</h2>
        <p className="text-2xl md:text-4xl font-semibold font-poppins">{title}</p>
        <div className="text-lg">
          <p className="mb-2">{description1}</p>
          <p className="mb-2">{description2}</p>
          <p className="mb-4">{description3}</p>
          <div className="flex items-center gap-4">
            {icon}
            <div className="font-bold">{icondescription}</div>
            {icon2}
            <div className="font-bold">{icondescription2}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

Productpropcomponent.propTypes = {
  benefit: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  imageWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired, // Allow string or number for imageWidth
  icon: PropTypes.node.isRequired,  // Change to node to accept JSX
  icon2: PropTypes.node.isRequired,  // Change to node to accept JSX
  icondescription: PropTypes.string.isRequired,
  icondescription2: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description1: PropTypes.string.isRequired,
  description2: PropTypes.string.isRequired,
  description3: PropTypes.string.isRequired,
  align: PropTypes.oneOf(['left', 'right']).isRequired,
};

export default Productpropcomponent;
