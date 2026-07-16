import type { NextConfig } from "next";

// Set by the GitHub Actions workflow, e.g. "/portfolio_fima" for
// https://fima41.github.io/portfolio_fima/. Empty for local dev.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
