/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/High-Level-Dashboard',
  assetPrefix: '/High-Level-Dashboard/',
}

module.exports = nextConfig 