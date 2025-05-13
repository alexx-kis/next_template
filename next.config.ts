import { PREFIX } from '@/constants/const';
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  output: 'export',
  basePath: PREFIX,
  assetPrefix: PREFIX,
  reactStrictMode: true,
  images: {
    unoptimized: true
  },
  // trailingSlash: true,
};

export default nextConfig;
