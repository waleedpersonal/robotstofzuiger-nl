/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // Required for static export to Vercel
  },
  trailingSlash: true,
  // No basePath needed - this is a standalone domain
};

module.exports = nextConfig;
