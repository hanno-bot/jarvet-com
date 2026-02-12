import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],

  // Aggressive caching for static assets on Vercel CDN
  headers: async () => [
    {
      source: "/:path*.(svg|ico|png|jpg|jpeg|webp|woff2)",
      headers: [
        {
          key: "Cache-Control",
          value: "public, max-age=31536000, immutable",
        },
      ],
    },
    {
      source: "/llms.txt",
      headers: [
        {
          key: "Cache-Control",
          value: "public, max-age=86400, s-maxage=86400",
        },
      ],
    },
    {
      // Cache dynamic OG image on Vercel CDN — regenerated only on new deploys
      source: "/opengraph-image",
      headers: [
        {
          key: "Vercel-CDN-Cache-Control",
          value: "public, max-age=31536000",
        },
        {
          key: "Cache-Control",
          value: "public, max-age=86400",
        },
      ],
    },
  ],
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
