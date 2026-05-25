import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/post/:number',
        destination: '/posts/:number/-',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
