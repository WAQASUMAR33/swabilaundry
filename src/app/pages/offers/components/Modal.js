import React from "react";

const Modal = ({ show, onClose, imageSrc }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-100 md:mt-[120px]">
      <div className="bg-white p-4 rounded shadow-lg relative max-w-full max-h-full">
        <button
          className="absolute top-0 right-0 p-2 text-2xl font-bold"
          onClick={onClose}
        >
          &times;
        </button>
        <img src={imageSrc} alt="Offer" className="w-auto max-h-[70vh] object-contain " />
      </div>
    </div>
  );
};

export default Modal;
