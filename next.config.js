/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
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
