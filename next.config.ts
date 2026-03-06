import type { NextConfig } from "next";
const repo = "Portfolio";
const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  images: { unoptimized: true },
  // basePath: "/Portfolio",
  // assetPrefix: "/Portfolio/",
  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,
};

export default nextConfig;
