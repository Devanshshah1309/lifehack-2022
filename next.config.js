/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  Images: {
    domains: ["images.unsplash.com", "firebasestorage.googleapis.com"],
  },
};

module.exports = nextConfig;
