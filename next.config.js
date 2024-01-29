/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["three"],
  images: {
    domains: ["prod-files-secure.s3.us-west-2.amazonaws.com"],
  },
};
const withVideos = require("next-videos");
module.exports = withVideos({
  transpilePackages: ["three"],
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
