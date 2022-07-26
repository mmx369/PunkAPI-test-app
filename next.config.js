/** @type {import('next').NextConfig} */

const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require('next/constants')

const nextConfig = (phase) => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER
  const isProd = phase === PHASE_PRODUCTION_BUILD
  console.log(`isDev:${isDev}  isProd:${isProd}`)

  const env = {
    RESTURL: (() => {
      if (isDev) return 'http://localhost:3000'
      if (isProd) {
        return 'http://localhost:3000'
      }
      return 'RESTURL:not (isDev,isProd)'
    })(),
  }

  const distDir = isDev ? '.next' : 'build'

  return {
    env,
    distDir,
    reactStrictMode: true,
    swcMinify: true,
    images: {
      domains: [
        'images.punkapi.com',
        'distribuzionemoderna-lemmon.softecspa.net',
      ],
      loader: 'akamai',
      path: '',
    },
  }
}

module.exports = nextConfig
