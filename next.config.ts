import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/portfolio',
  assetPrefix: '/portfolio/',
  trailingSlash: true,
};

export default nextConfig;
