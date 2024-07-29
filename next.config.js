
const path = require('path')

const nextConfig = {
sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'blog.mestresdaweb.io',
        pathname: '/files/**',
      },
      {
        protocol: 'https',
        hostname: 'marketing.mestresdaweb.io',
        pathname: '/files/**',
      },
    ],
  },
};

module.exports = nextConfig;
