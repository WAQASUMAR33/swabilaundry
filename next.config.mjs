/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'swabiapp.rapidtechpro.com'  
          },
        ],
      },
};

export default nextConfig;