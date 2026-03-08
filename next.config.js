/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ct-sc.icmarkets.com',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
