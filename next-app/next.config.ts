import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  output: 'standalone',
  eslint: {
    dirs: ['src'],
  },
}

export default nextConfig
