import type { NextConfig } from "next";

const repo = "Portfolio";
const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  /* config options here */
  basePath: isProd ? `/${repo}` : "",
  assetPrefix: isProd ? `/${repo}` : "",
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
