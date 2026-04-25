/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/aon-digital-placement-agent",
  assetPrefix: "/aon-digital-placement-agent/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
