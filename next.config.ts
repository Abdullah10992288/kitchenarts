import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  rules: {
    "@typescript-eslint/no-explicit-any": "off",
    "eslint-disable": " @typescript-eslint/no-explicit-any",
  },
};

export default nextConfig;
