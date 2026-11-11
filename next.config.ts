import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "Strict-Transport-Security", value: "max-age=31536000" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
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
      // LiveChat TJ was rebranded as Kontakio. These rules sit before the
      // /ru/* rule so old /ru/... URLs reach the new page in a single hop.
      { source: "/cases/livechat-tj", destination: "/cases/kontakio", permanent: true },
      // screens that exist under the same name in the new case keep their deep link
      { source: "/cases/livechat-tj/:sub(hero|features|how-it-works|pricing|login|register)", destination: "/cases/kontakio/:sub", permanent: true },
      { source: "/ru/cases/livechat-tj/:sub(hero|features|how-it-works|pricing|login|register)", destination: "/cases/kontakio/:sub", permanent: true },
      {
        source: "/:lang(en|tj|uz|kk|ky|tk|fa|ar)/cases/livechat-tj/:sub(hero|features|how-it-works|pricing|login|register)",
        destination: "/:lang/cases/kontakio/:sub",
        permanent: true,
      },
      { source: "/cases/livechat-tj/:sub*", destination: "/cases/kontakio", permanent: true },
      { source: "/ru/cases/livechat-tj", destination: "/cases/kontakio", permanent: true },
      { source: "/ru/cases/livechat-tj/:sub*", destination: "/cases/kontakio", permanent: true },
      {
        source: "/:lang(en|tj|uz|kk|ky|tk|fa|ar)/cases/livechat-tj",
        destination: "/:lang/cases/kontakio",
        permanent: true,
      },
      {
        source: "/:lang(en|tj|uz|kk|ky|tk|fa|ar)/cases/livechat-tj/:sub*",
        destination: "/:lang/cases/kontakio",
        permanent: true,
      },
      { source: "/news/livechat", destination: "/news/kontakio", permanent: true },
      { source: "/ru/news/livechat", destination: "/news/kontakio", permanent: true },
      {
        source: "/:lang(en|tj|uz|kk|ky|tk|fa|ar)/news/livechat",
        destination: "/:lang/news/kontakio",
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
    // 90 is used by the home page news banner, where screenshots fill a wide frame.
    qualities: [75, 90],
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
