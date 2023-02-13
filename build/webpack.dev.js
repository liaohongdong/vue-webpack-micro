const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");
const portfinder = require('portfinder')

const config = require('../config')

const baseConf = require('./webpack.base.js')

const HOST = process.env.HOST
const PORT = 8080

const devWebpackConf = merge.merge(baseConf, {
  mode: 'development',
  devtool: config.dev.devtool,
  watch: true,
  watchOptions: {
    aggregateTimeout: 600,
    poll: config.dev.poll || 1000,
    ignored: /node_modules/,
  }
})

module.exports = devWebpackConf
// module.exports = new Promise((resolve, reject) => {
//   portfinder.basePort = process.env.PORT || config.dev.port,
//   portfinder.getPort((err, port) => {
//     if (err) {
//       reject(err)
//     } else {
//       process.env.PORT = port
//       devWebpackConf.devServer.port = port
//       const data = config.dev.https ? 'https' : 'http'

//       devWebpackConf.plugins.push(
//         new FriendlyErrorsWebpackPlugin({
//           compilationSuccessInfo: {
//               messages: [
//                 `Your application is running here: http://${devWebpackConf.devServer.host}:${port}`
//               ],
//               notes: []
//             },
//           clearConsole: true
//         })
//       )
//       resolve(devWebpackConf)
//     }
//   })
// })