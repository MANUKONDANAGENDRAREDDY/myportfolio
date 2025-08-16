/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  basePath: isProd ? "/myportfolio" : "",
  assetPrefix: isProd ? "/myportfolio/" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
