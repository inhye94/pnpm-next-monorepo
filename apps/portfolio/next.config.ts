import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      "private-user-images.githubusercontent.com",
      "avatars.githubusercontent.com",
    ],
  },
};

export default nextConfig;
