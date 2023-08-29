const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require("path")


module.exports = merge(common, {
    mode: 'development',
    devtool: 'cheap-module-source-map',
    devServer: {
        open: true,
        static: {
            directory: path.resolve(__dirname, 'dist')
        },
        port: 8080,
        hot: true,
        compress: true,
        devMiddleware: { writeToDisk: true },
        client: { overlay: true },
    },
});