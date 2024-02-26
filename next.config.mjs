/** @type {import('next').NextConfig} */
import withPWA from "next-pwa";

const nextPWAConfig = withPWA({
  dest: "public",
  images: {
    domains: ["avatars.githubusercontent.com"],
  },
});

const nextConfig = {
  images: {
    domains: ["avatars.githubusercontent.com"],
  },
};

export default process.env.NODE_ENV === "development"
  ? nextConfig
  : nextPWAConfig;
