import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    'http://localhost:3000', // Your primary development origin
    'http://172.16.0.8:3000', // Any other specific development domains
    //'*.your-subdomain.dev', // Wildcard for subdomains if needed
  ],
};

export default nextConfig;
