/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  Images: {
    domains: ["images.unsplash.com"],
  },
};

module.exports = nextConfig;
