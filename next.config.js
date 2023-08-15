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
    domains: [
      "d3j5xyin142jiv.cloudfront.net",
      "d1lcbafy93xv06.cloudfront.net",
      "dnfbqhh6e48qy.cloudfront.net",
      "d2qy7jf8q4hhsv.cloudfront.net",
    ],
    experimental: {
      scrollRestoration: true,
    },
    disableStaticImages: false,
  },
};

module.exports = nextConfig;
