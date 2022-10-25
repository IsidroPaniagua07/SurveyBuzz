/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://surveybuzz.vercel.app/:path*'
      }
    ]
  },
  swcMinify: true,
  images: {
    domains: ["res.cloudinary.com"],
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = nextConfig;
