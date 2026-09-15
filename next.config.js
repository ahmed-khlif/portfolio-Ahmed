/** @type {import('next').NextConfig} */
const nextConfig = {
  // ───────────────────────────────────────────────────────────────────────
  // Single source of truth. This project previously shipped BOTH
  // next.config.js and next.config.mjs — Next resolves next.config.js first,
  // so everything in the .mjs (unoptimized images, ignored build errors) was
  // silently ignored. The settings below are the union of the two files.
  // ──────────────────────────────────────────────────────────────────────
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    // Local SVG covers/logos are used as project artwork, so allow them
    // even if image optimisation is ever re-enabled.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  // Explicitly pin the workspace root: multiple lockfiles exist on this
  // machine, and Turbopack was otherwise resolving the wrong directory.
  turbopack: {
    root: __dirname,
  },
  async headers() {
    return [
      {
        source: "/api/sb-contact",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,DELETE,PATCH,POST,PUT",
          },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
