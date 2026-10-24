import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Old MVP URLs → new pages, so any shared links keep working.
  async redirects() {
    return [
      { source: "/products", destination: "/shop", permanent: true },
      { source: "/products/:id", destination: "/shop", permanent: true },
      { source: "/accessories", destination: "/shop?category=accessories", permanent: true },
      { source: "/services", destination: "/repair", permanent: true },
      { source: "/services/:id", destination: "/repair", permanent: true },
      { source: "/blog", destination: "/", permanent: false },
      { source: "/blog/:id", destination: "/", permanent: false },
    ];
  },
};

export default nextConfig;
