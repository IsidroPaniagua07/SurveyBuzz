/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["cdn.mos.cms.futurecdn.net"],
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = nextConfig;
