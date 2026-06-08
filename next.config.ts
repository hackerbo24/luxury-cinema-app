import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // !! DANGER !!
    // This ignores TypeScript errors during build. 
    // Use this only if you are confident your code works.
    ignoreBuildErrors: true,
  },
};

export default nextConfig;