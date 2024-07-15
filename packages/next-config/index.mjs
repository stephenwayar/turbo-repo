/** @type {import('next').NextnextConfig} */

const nextConfig = {
  webpack: (nextConfig) => nextConfig,
  env: {
    NEXT_PUBLIC_SERVER_URL: process.env.NEXT_PUBLIC_SERVER_URL
  }
};

export default nextConfig;