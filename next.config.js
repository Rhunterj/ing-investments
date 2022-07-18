/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: '/api/stocks',
        destination: 'https://www.ing.nl/api/securities/web/markets/stockmarkets/AEX',
      },
    ]
  },
}

module.exports = nextConfig
