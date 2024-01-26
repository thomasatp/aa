/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["three"],
  images: {
    domains: ["prod-files-secure.s3.us-west-2.amazonaws.com"],
  },
};

module.exports = nextConfig;
