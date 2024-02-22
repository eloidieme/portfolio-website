/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV = 'production'

const nextConfig = {
    basePath: isProd ? "/portfolio-website" : "",
    assetPrefix: isProd ? '/portfolio-website/' : '',
    output: "export",  // <=== enables static exports
    images: {
        unoptimized: true
      },
  };

export default nextConfig;
