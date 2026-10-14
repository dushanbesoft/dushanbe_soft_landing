import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  // Permanent redirects so search engines consolidate duplicate URLs
  // ("Alternate page with proper canonical tag" in Search Console).
  async redirects() {
    return [
      // www → apex domain
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.dushanbe-soft.tj" }],
        destination: "https://dushanbe-soft.tj/:path*",
        permanent: true,
      },
      // Russian is the unprefixed default locale: /ru/* → /*
      { source: "/ru", destination: "/", permanent: true },
      { source: "/ru/:path*", destination: "/:path*", permanent: true },
      // ISO code "tg" is a common guess for the Tajik version
      { source: "/tg", destination: "/tj", permanent: true },
      { source: "/tg/:path*", destination: "/tj/:path*", permanent: true },
    ];
  },
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
