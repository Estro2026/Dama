import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/dama",
  assetPrefix: "/dama",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
