import React from 'react';

const Footer = () => {
  return (
    <div className="landing-locations--wrapper pt-14 pb-14 bg-gray-100">
      <div className="container mx-auto">
        <div className="row mb-6">
          <div className="col-auto">
            <h5 className="header text-xl font-bold pl-20">Swabi Laundry in UAE</h5>
          </div>
        </div>
        <div className="row mb-16 pl-20 landing-locations--city-list grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-4">
          <div className="col">
            <div className="city-item py-2 px-4 text-center border border-gray-300 rounded">
              <button>Abu Dhabi</button>
            </div>
          </div>
          <div className="col">
            <div className="city-item py-2 px-4 text-center border border-gray-300 rounded">
              <button>Dubai</button>
            </div>
          </div>
        </div>
        <div className="row mb-6">
          <div className="col-auto">
            <h5 className="header text-xl font-bold pl-20">Swabi Laundry</h5>
          </div>
        </div>
        <div className="row landing-locations--country-list grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-4">
          {[
            {
              imgSrc: 'https://prod-cdn.laundryheap.com/images/static/flags/gb.svg',
              alt: 'Gb',
              text: 'United Kingdom'
            },
            {
              imgSrc: 'https://prod-cdn.laundryheap.com/images/static/flags/ie.svg',
              alt: 'Ie',
              text: 'Ireland'
            },
            {
              imgSrc: 'https://prod-cdn.laundryheap.com/images/static/flags/us.svg',
              alt: 'Us',
              text: 'United States'
            },
            {
              imgSrc: 'https://prod-cdn.laundryheap.com/images/static/flags/fr.svg',
              alt: 'Fr',
              text: 'France'
            },
            {
              imgSrc: 'https://prod-cdn.laundryheap.com/images/static/flags/se.svg',
              alt: 'Se',
              text: 'Sweden'
            },
            {
              imgSrc: 'https://prod-cdn.laundryheap.com/images/static/flags/ae.svg',
              alt: 'Ae',
              text: 'UAE'
            },
            {
              imgSrc: 'https://prod-cdn.laundryheap.com/images/static/flags/nl.svg',
              alt: 'Nl',
              text: 'Netherlands'
            },
            {
              imgSrc: 'https://prod-cdn.laundryheap.com/images/static/flags/qa.svg',
              alt: 'Qa',
              text: 'Qatar'
            },
            {
              imgSrc: 'https://prod-cdn.laundryheap.com/images/static/flags/sa.svg',
              alt: 'Sa',
              text: 'Saudi Arabia'
            },
            {
              imgSrc: 'https://prod-cdn.laundryheap.com/images/static/flags/dk.svg',
              alt: 'Dk',
              text: 'Denmark'
            },
            {
              imgSrc: 'https://prod-cdn.laundryheap.com/images/static/flags/kw.svg',
              alt: 'Kw',
              text: 'Kuwait'
            },
            {
              imgSrc: 'https://prod-cdn.laundryheap.com/images/static/flags/bh.svg',
              alt: 'Bh',
              text: 'Bahrain'
            },
            {
              imgSrc: 'https://prod-cdn.laundryheap.com/images/static/flags/sg.svg',
              alt: 'Sg',
              text: 'Singapore'
            }
          ].map((item, index) => (
            <div key={index} className="col">
              <div className="country-item py-2 px-4 flex items-center pl-20">
                <img className="hidden md:block mr-2" width="24" height="24" loading="lazy" alt={item.alt} src={item.imgSrc} />
                <span>{item.text}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
