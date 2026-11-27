import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "i.ytimg.com" },
      { protocol: "https", hostname: "www.thesaanvigupta.com" },
    ],
  },
  async redirects() {
    return [
      { source: "/services", destination: "/#services", permanent: true },
      {
        source: "/terms-and-conditions.html",
        destination: "/privacy-policy",
        permanent: true,
      },
      {
        source: "/services/tarot-card-reading",
        destination: "/#services",
        permanent: true,
      },
      {
        source: "/services/vastu-coaching",
        destination: "/vastu-coaching",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
