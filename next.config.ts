import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  distDir: "dist",
  trailingSlash: true,
  poweredByHeader: false,
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
