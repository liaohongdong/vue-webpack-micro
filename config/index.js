const path = require('path')

const PROXY_ENV = process.env.PROXY_ENV || 'dev'

const targets = {
  dev: 'http://dev.vuewebpackmicro.com',
  test: 'http://test.vuewebpackmicro.com',
  pre: 'http://pre.vuewebpackmicro.com',
  prod: 'http://vuewebpackmicro.com',
}

if (process.env.BABEL_ENV !== 'test') {
  console.log(`代理到${PROXY_ENV}环境：${targets[PROXY_ENV]}`)
}

module.exports = {
  dev: {
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      '/router': {
        target: targets[PROXY_ENV],
        changeOrigin: true,
      }
    },
    domain: 'local.vuewebpackmicro.com',
    host: '0.0.0.0',
    port: 8080,
    autoOpenBrowser: false,
    https: {
      spdy: {
        protocols: ['http:/1.1'],
      },
    },
    errorOverlay: true,
    notifyOnErrors: true,
    poll: 1000,
    showEslintErrorsInOverlay: false,
    devtool: 'eval-cheap-module-source-map',
    cacheBusting: true,
    cssSourceMap: true,
  },
  build: {
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    productionSourceMap: false,
    devtool: 'source-map',
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    bundleAnalyzerReport: process.env.npm_config_repoty
  }
}