import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    "10.171.10.70",
    "10.*.*.*",
    "192.168.*.*",
    "172.16.*.*",
  ],
};

export default nextConfig;