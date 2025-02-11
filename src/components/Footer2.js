import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer2 = () => {
  return (
    <div className=" pt-8 pb-8 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between items-center mb-4">
          <div className="mb-4 md:mb-0 md:pr-8">
            <p className="mb-2 text-center md:text-left">Powered by</p>
            <div className="flex items-center justify-center md:justify-start gap-2">
              <div>
                <img
                  className="lg:max-w-full w-[100px] h-auto"
                  loading="lazy"
                  alt="Logo main"
                  src="/swabi logo.png"
                />
              </div>
              <div>
                <img
                  className="lg:max-w-full w-[100px] h-auto"
                  loading="lazy"
                  alt="Logo main"
                  src="/swabi text.png"
                />
              </div>
            </div>
          </div>
          <div className="mb-4 md:mb-0">
            <p className="mb-2 text-center md:text-left">Download our mobile app</p>
            <div className="flex justify-center md:justify-start gap-2">
              <div>
                <img
                  className="lg:max-w-full w-[200px] h-auto"
                  loading="lazy"
                  alt="App store"
                  src="https://prod-cdn.laundryheap.com/assets/app_stores/app_store2x-a73b1c878a8772f8f5cea32472ec7cfd2b6f1fd21dde21c6836ff2f4d8eb9c8e.png"
                />
              </div>
              <div>
                <img
                  className="lg:max-w-full w-[200px] h-auto"
                  loading="lazy"
                  alt="Play store"
                  src="https://prod-cdn.laundryheap.com/assets/app_stores/play_store2x-1529597177b6267b5a63d73a4174ba925a2f204a36871e247bfc944c477e3593.png"
                />
              </div>
            </div>
          </div>
          <div className="md:pl-8">
            <p className="mb-2 text-center md:text-left">Follow us</p>
            <div className="flex justify-center md:justify-start gap-2">
              <div>
                <FaFacebookF className="text-2xl" />
              </div>
              <div>
                <FaTwitter className="text-2xl" />
              </div>
              <div>
                <FaInstagram className="text-2xl" />
              </div>
              <div>
                <FaLinkedinIn className="text-2xl" />
              </div>
            </div>
          </div>
        </div>
        <hr className="my-4" />
        <div className="landing-footer--bottom">
          <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="mb-2">
                All rights reserved. © Swabi Laundry 2024. By visiting this page you agree to our{' '}
                <span>privacy policy</span> and <span>terms and conditions</span>.
              </p>
            </div>
            <div className="flex items-center gap-1">
              <img
                width="24"
                height="24"
                loading="lazy"
                alt="Pin"
                src="https://prod-cdn.laundryheap.com/assets/locale_picker/pin-a97cd2ea1f157014c72e0477b727bbf9cd40c661fc477ae6a66300ebcb782b94.svg"
              />
              <span>UAE</span>
              <img
                width="16"
                height="16"
                loading="lazy"
                alt="Dropdown"
                src="https://prod-cdn.laundryheap.com/assets/icons/dropdown-819d3d4a818468a06515caf5469f68e51f3e27173dee64a189bf27604ad1298e.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer2;
