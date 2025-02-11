/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'swabiapi.swabilaundry.ae'  
          },
        ],
      },
};

export default nextConfig;