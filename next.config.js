/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.schuettners.de',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'schuettners.de',
        port: '',
        pathname: '/**',
      },
    ],
  },
  trailingSlash: true,
  basePath: process.env.NODE_ENV === 'production' ? '/Schuettners' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Schuettners/' : '',
}

module.exports = nextConfig
