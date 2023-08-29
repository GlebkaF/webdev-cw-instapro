const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
// const path = require("path")
// const babelLoader = require('babel-loader');

module.exports = merge(common, {
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude:
                    [/node_modules/],
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }]
            },
        ]
    },
});