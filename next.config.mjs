/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/lupes-bbq',
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
