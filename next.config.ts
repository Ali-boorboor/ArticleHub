import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  allowedDevOrigins: ["10.81.19.206"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github.com",
      },
    ],
  },
};

export default nextConfig;
