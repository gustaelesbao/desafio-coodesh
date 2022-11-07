/** @type {import('next').NextConfig} */
const runtimeCaching = require('next-pwa/cache');

const withPWA = require('next-pwa')({});

module.exports = withPWA({
  reactStrictMode: true,
  swcMinify: true,
  experimental: { appDir: true },
  compiler: {
    styledComponents: true,
  },
  pwa: {
    dest: 'public',
    disable: !isProd,
  },
});
