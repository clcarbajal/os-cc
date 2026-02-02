/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    typedRoutes: true,
  },
  // Allow images from external sources (for vendor logos, etc.)
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.toast.com",
      },
    ],
  },
};

module.exports = nextConfig;
