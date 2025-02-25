import React from 'react';
import PropTypes from 'prop-types';

const Productpropcomponent = ({ image, heading, content, align }) => {
  return (
    <div className={`flex flex-col justify-center gap-6 p-6 md:p-10 ${align === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
      <div className="flex-shrink-0 max-w-full md:max-w-[50%]">
        <img src={image} alt="Feature" className="w-full h-auto rounded-lg" />
      </div>
      <div className="flex flex-col gap-4 text-center md:text-left md:w-[50%]">
        <h2 className="text-xl md:text-4xl font-bold text-[#92C644]">{heading}</h2>
        <div className="text-lg">
        <p
          className="text-base md:text-lg"
          dangerouslySetInnerHTML={{ __html: content }} >
            
          </p>
        </div>
      </div>
    </div>
  );
};

Productpropcomponent.propTypes = {
  image: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  align: PropTypes.oneOf(['left', 'right']).isRequired,
};

export default Productpropcomponent;
