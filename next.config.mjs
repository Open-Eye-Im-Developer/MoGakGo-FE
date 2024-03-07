/** @type {import('next').NextConfig} */

import withPWA from "next-pwa";

const nextPWAConfig = withPWA({
  dest: "public",
  register: true,
  skipWaiting: true,
  buildExcludes: [/middleware-manifest.json$/],
  disable: process.env.NODE_ENV === "development",
});

const nextConfig = {
  images: {
    domains: ["avatars.githubusercontent.com"],
  },
  async redirects() {
    return [
      {
        source: "/signup/:slug*",
        destination: "/login",
        permanent: false,
      },
      {
        source: "/review/:slug*",
        destination: "/",
        permanent: false,
      },
    ];
  },
};

export default process.env.NODE_ENV === "development"
  ? nextConfig
  : nextPWAConfig;
