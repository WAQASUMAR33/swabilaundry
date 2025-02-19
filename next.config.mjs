/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "swabiapp.rapidtechpro.com",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/api/:path*", // Apply CORS to all API routes
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "*", // Change to your frontend domain if needed
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET, POST, PUT, DELETE, OPTIONS",
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "Content-Type, Authorization",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
