import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/Dama",
  assetPrefix: "/Dama",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
