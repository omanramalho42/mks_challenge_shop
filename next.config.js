/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

const images = {
  domains: ['static.anurbanshop.com.br'],
}

module.exports = {nextConfig, images }
