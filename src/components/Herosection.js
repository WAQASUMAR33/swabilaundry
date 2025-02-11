'use client'
import { useState, useEffect } from 'react';

const Hero = () => {
    const [rating, setRating] = useState(null);
    const [userRatingsTotal, setUserRatingsTotal] = useState(null);

    useEffect(() => {
        const fetchRatings = async () => {
            try {
                const response = await fetch('/api/googleRatings');
                const data = await response.json();
                setRating(data.rating);
                setUserRatingsTotal(data.userRatingsTotal);
            } catch (error) {
                console.error('Error fetching Google ratings:', error);
            }
        };

        fetchRatings();
    }, []);

    const features = [
        {
            icon: '/herosectionicon/truck2.png',
            title: 'Free Pickup and Delivery',
        },
        {
            icon: '/herosectionicon/courier-services.png',
            title: 'Express Service',
        },
        {
            icon: '/herosectionicon/faitprice.png',
            title: 'Fair Pricing',
        },
        {
            icon: '/herosectionicon/multiplepayment.png',
            title: 'Multiple Payment Channels',
        },
    ];

    return (
        <div className="flex flex-col lg:flex-row items-center justify-between px-4 lg:px-12 pt-10 text-white mt-7 lg:mt-[110px]" style={{ backgroundColor: '#0890F1' }}>
            <div className="flex-1 lg:pr-12 order-2 lg:order-1 pb-2">
                <h1 className="py-2 md:px-10 lg:px-0 mb-2 text-white">
                    <span className='text-4xl font-bold lg:text-7xl'>Swabi Laundry</span><br />
                    <span className='text-2xl font-semibold lg:text-4xl'>Premium Laundry & Dry Cleaning</span><br />
                    <span className='text-xl font-normal text-center lg:text-2xl'>Clean. Anywhere. Anytime.</span>
                </h1>
                <div className='bg-opacity-80 flex rounded pr-2'>
                    {features.map((feature, index) => (
                        <div key={index} className="flex items-center">
                            <div className="flex flex-col items-center md:w-[200px] md:h-[120px] sm:w-[80px] w-[80px] text-center text-white">
                                <div className="mb-2">
                                    <img src={feature.icon} alt={feature.title} className='w-[50px] h-[50px] md:w-[70px] md:h-[70px]' />
                                </div>
                                <div className="text-[10px] md:text-[17px] px-2 font-semibold">{feature.title}</div>
                            </div>
                            {index < features.length - 1 && (
                                <div className='border-white border-r border-[1px] h-[80px] my-auto opacity-50'></div>
                            )}
                        </div>
                    ))}
                </div>
                <div className="grid md:grid-cols-2 grid-cols-1 mt-4 md:pl-4 md:pl-0">
                    <a href="https://www.google.com/search?q=Swabi+Laundry+and+Dry+Cleaning+Service&rlz=1C1GCEA_enIN1039IN1039&oq=swabi+laundry&gs_lcrp=EgZjaHJvbWUqBggBEEUYOzIGCAAQRRg7MgYIARBFGDsyBggCEEUYOzIGCAMQRRg7MgYIBBBFGD0yBggFEEUYPTIGCAYQRRg80gEIMzUyNmowajeoAgCwAgA&sourceid=chrome&ie=UTF-8">
                        <div className="flex flex-row bg-white md:w-[360px] w-[330px] text-black md:p-3 p-2 text-center justify-center items-center mx-auto rounded-full">
                            <img src="/google1.png" alt="Google" width={80} className="mr-2 object-contain" />
                            <span className="text-yellow-500 text-xl md:text-2xl lg:text-2xl">★ ★ ★ ★ ★</span>
                            <div className="row md:text-xl text-md font-medium px-2">{rating && userRatingsTotal && `(${rating} )`} 4.8/5 stars</div>
                        </div>
                    </a>
                    <div>
                        <h3 className="text-md md:text-2xl text-center md:text-left font-bold text-white mb-3 pt-3" id="landingReviewStripTitle">
                            Ranked # 1 by customers
                        </h3>
                    </div>
                </div>
            </div>
            <div className="flex-1 lg:mt-0 order-1 lg:order-2 pt-[10px]">
                <img src="/laundryman.png" alt="Hero Image" className="rounded-xl md:h-[400px] md:w-[700px] object-contain" />
            </div>
        </div>
    );
};

export default Hero;
