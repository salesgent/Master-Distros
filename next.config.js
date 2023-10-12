/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  publicRuntimeConfig: {
    GOOGLE_RECAPTCHA_KEY: process.env.SITE_RECAPTCHA_KEY,
    DOMAIN_BASE_URL: process.env.DOMAIN_BASE_URL,
    SERVICE_API_BASE_URL: process.env.SERVICE_API_BASE_URL,
  },
  env: {
    DOMAIN_BASE_URL: process.env.DOMAIN_BASE_URL,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
