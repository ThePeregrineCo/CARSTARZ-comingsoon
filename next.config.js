/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    unoptimized: true,
  },
  // Ensure static files are properly handled
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(ico|png|svg|jpg|jpeg|gif)$/i,
      type: 'asset/resource',
    })
    return config
  },
}

module.exports = nextConfig 