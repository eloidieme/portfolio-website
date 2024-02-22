/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "/portfolio-website",
    output: "export",  // <=== enables static exports
    images: {
        loader: 'akamai',
        path: '',
      },
  };

export default nextConfig;
