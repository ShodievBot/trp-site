import type { NextConfig } from "next";

// Addresses of the old site (themostreliablepublication.uz). Redirects run before src/proxy.ts.
const legacyRedirects: [string, string][] = [
  ["/xizmatlar", "/uz/services"],
  ["/yangiliklar", "/uz/news"],
  ["/yangiliklar/:path*", "/uz/news"],
  ["/kontaktlar", "/uz/contact"],
  ["/shartnomalar", "/uz/offer"],
  ["/nashriyot-litsenziyasi", "/uz/license"],
];

const nextConfig: NextConfig = {
  experimental: {
    globalNotFound: true,
  },
  // getLicenseImage() checks for public/images/license.* at runtime; ship those files with the function.
  outputFileTracingIncludes: {
    "/[locale]/license": ["./public/images/license.*"],
  },
  async redirects() {
    return legacyRedirects.map(([source, destination]) => ({
      source,
      destination,
      statusCode: 301 as const,
    }));
  },
};

export default nextConfig;
