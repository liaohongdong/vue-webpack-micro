const path = require('path')

const config = require('../config')

const isProduction = process.env.NODE_ENV === 'production'

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: {
    app: './src/layout/main.js',
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: isProduction ? config.build.assetsPublicPath : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      // 'vue$': 'vue/dist/vue.runtime.esm.js',
      // '@': resolve('src'),
      // '@': path.resolve(__dirname, 'src'),
      // 'public': resolve('src/public'),
      // '@build': path.join(__dirname, './replace')
    }
  }
}