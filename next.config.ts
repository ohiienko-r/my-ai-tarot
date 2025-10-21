/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Frame-Options",
            value: "ALLOW-FROM https://web.telegram.org",
          },
          {
            key: "Content-Security-Policy",
            value:
              "frame-ancestors 'self' https://web.telegram.org https://webk.telegram.org https://webz.telegram.org",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
