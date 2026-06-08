import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true, // Ignores TS errors
  },
  eslint: {
    ignoreDuringBuilds: true, // Ignores Lint errors
  },
};

export default nextConfig;