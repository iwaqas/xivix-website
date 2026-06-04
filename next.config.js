/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.abacus.ai',
        pathname: '/images/**',
      },
    ],
  },
}

module.exports = nextConfig
