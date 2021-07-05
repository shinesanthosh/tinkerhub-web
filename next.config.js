const path = require('path')
const withPwa = require('next-pwa')

require('dotenv').config()
const Dotenv = require('dotenv-webpack')

module.exports = {
  webpack: (config) => {
    config.plugins = config.plugins || []

    config.plugins = [
      ...config.plugins,

      new Dotenv({
        path: path.join(__dirname, '.env'),
        systemvars: true,
      }),
    ]

    return config
  },
}

module.exports = withPwa({
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
  },
})
