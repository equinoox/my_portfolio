import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Dev-only: allow loading the dev server from LAN addresses (phone/other device
  // on the same network), not just localhost. Without this, Next blocks the HMR
  // websocket cross-origin and the page loads without hot reload.
  allowedDevOrigins: ["10.171.10.70", "10.*.*.*", "192.168.*.*", "172.16.*.*"],
};

export default nextConfig;
