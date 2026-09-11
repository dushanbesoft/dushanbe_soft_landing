import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Prefer modern formats: AVIF first (best compression), WebP fallback,
    // then the browser falls back to the original for unsupported cases.
    formats: ["image/avif", "image/webp"],
    // Cache optimized images for 31 days to cut repeat revalidations.
    minimumCacheTTL: 2678400,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.builder.io",
      },
      {
        protocol: "https",
        hostname: "cdn.builder.io",
      },
    ],
  },
};

export default nextConfig;
