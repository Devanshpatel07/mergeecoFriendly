/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'instagram.com',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://va.vercel-scripts.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: blob: https:; frame-src 'self' https://www.google.com https://maps.google.com https://www.youtube.com https://www.youtube-nocookie.com; connect-src 'self' https://vitals.vercel-insights.com https://va.vercel-scripts.com https://api.resend.com;",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/our-product',
        destination: '/en/products',
        permanent: true,
      },
      {
        source: '/about-us',
        destination: '/en/about',
        permanent: true,
      },
      {
        source: '/contact-us',
        destination: '/en/contact',
        permanent: true,
      },
      {
        source: '/contact',
        destination: '/en/contact',
        permanent: true,
      },
      {
        source: '/shop',
        destination: '/en/products',
        permanent: true,
      },
      {
        source: '/shop-2',
        destination: '/en/products',
        permanent: true,
      },
      {
        source: '/my-account',
        destination: '/en/contact',
        permanent: true,
      },
      {
        source: '/blog',
        destination: '/en',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
