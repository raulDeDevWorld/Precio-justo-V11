// /** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig
/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
  }
  
  const withPWA = require('next-pwa')({
    dest: 'public'
  })
  
  module.exports = withPWA({
    nextConfig
  })