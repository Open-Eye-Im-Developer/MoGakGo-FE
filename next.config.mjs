/** @type {import('next').NextConfig} */
import pkg from "next-pwa";

const withPWA = pkg;

const nextConfig = withPWA({
  dest: "public",
});

export default nextConfig;
