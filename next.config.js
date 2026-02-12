/** @type {import('next').NextConfig} */

const repo = "under-construction";
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  // GitHub Pages necesita export estático
  output: "export", // genera /out al hacer `next build` [web:111]

  // Project Pages publica en /under-construction/
  basePath: isProd ? `/${repo}` : "", // [web:187]
  assetPrefix: isProd ? `/${repo}/` : "", // trailing slash recomendado [web:118][web:121]

  // Requerido si usas next/image con static export
  images: {
    unoptimized: true,
  }, // [web:195]

  experimental: {
    // Si no usas MongoDB en Server Components, puedes quitarlo
    serverComponentsExternalPackages: ["mongodb"],
  },

  webpack(config, { dev }) {
    if (dev) {
      config.watchOptions = {
        poll: 2000,
        aggregateTimeout: 300,
        ignored: ["**/node_modules"],
      };
    }
    return config;
  },

  onDemandEntries: {
    maxInactiveAge: 10000,
    pagesBufferLength: 2,
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "ALLOWALL" },
          { key: "Content-Security-Policy", value: "frame-ancestors *;" },
          { key: "Access-Control-Allow-Origin", value: process.env.CORS_ORIGINS || "*" },
          { key: "Access-Control-Allow-Methods", value: "GET, POST, PUT, DELETE, OPTIONS" },
          { key: "Access-Control-Allow-Headers", value: "*" },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
