/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["github.com","cdn.myanimelist.net"]
  }
}

module.exports = nextConfig
