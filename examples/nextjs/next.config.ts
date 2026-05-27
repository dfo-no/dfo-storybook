import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  experimental: {
    esmExternals: true,
  },
  transpilePackages: ['@dfo/components'],
};

export default nextConfig;
