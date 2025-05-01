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
  // Add headers for better caching and PWA updates
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, must-revalidate',
          },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig 