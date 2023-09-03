/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['job.risestudio.com.br']
  },
  experimental: {
    serverActions: true,
  },
}

module.exports = nextConfig
