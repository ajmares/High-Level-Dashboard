/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  // Ensure no restrictions on access
  experimental: {
    isrMemoryCacheSize: 0,
  },
  // Allow all domains for assets
  assetPrefix: undefined,
  // Ensure public access
  crossOrigin: 'anonymous',
}

module.exports = nextConfig 