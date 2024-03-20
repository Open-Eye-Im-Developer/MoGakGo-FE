/** @type {import('next').NextConfig} */

import withPWA from "next-pwa";

const nextPWAConfig = withPWA({
  dest: "public",
  register: true,
  skipWaiting: true,
  buildExcludes: [/middleware-manifest.json$/],
  disable: process.env.NODE_ENV === "development",
});

const nextConfig = nextPWAConfig({
  images: {
    domains: ["avatars.githubusercontent.com", "github.com"],
  },
  async redirects() {
    return [
      {
        source: "/signup/:slug",
        destination: "/signup",
        permanent: false,
      },
    ];
  },
});

export default nextConfig;
