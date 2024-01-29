/** @type {import('next').NextConfig} */
const nextConfig = {};
const withVideos = require("next-videos");
module.exports = withVideos({
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "prod-files-secure.s3.us-west-2.amazonaws.com",
        port: "",
      },
    ],
  },
});
