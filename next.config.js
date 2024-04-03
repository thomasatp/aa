/** @type {import('next').NextConfig} */
const nextConfig = {};
const withVideos = require("next-videos");
module.exports = withVideos({
  experimental: { serverMinification: false },
  // async rewrites() {
  //   return [
  //     {
  //       source: "/:path*",
  //       destination: "/",
  //     },
  //   ];
  // },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "prod-files-secure.s3.us-west-2.amazonaws.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "v5.airtableusercontent.com",
        port: "",
      },
    ],
  },
});
