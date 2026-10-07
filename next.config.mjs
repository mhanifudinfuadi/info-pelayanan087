/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Keep local/public visual assets straightforward to deploy on Vercel.
  images: {
    unoptimized: true,
  },

  // Do not hide TypeScript errors in production builds.
  typescript: {
    ignoreBuildErrors: false,
  },

  // The project is branded as an information-service experience for
  // KPP Madya Dua Jakarta Barat; avoid exposing the starter-template header.
  poweredByHeader: false,

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
        ],
      },
    ]
  },
}

export default nextConfig
