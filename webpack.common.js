const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CopyPlugin = require("copy-webpack-plugin");
const path = require("path")
const babelLoader = require('babel-loader');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");



module.exports = {
    // mode: 'development',
    entry: {
        index: path.resolve(__dirname, './src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: "[name].js",
        assetModuleFilename: '[name][ext]',
        // assetModuleFilename: 'assets/fonts/[name][ext]',
        publicPath: '/'
    },
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
    module: {
        rules: [
            {
                test: /\.ico$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'assets/icons',
                        },
                    },
                ],
            }
            ,
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'assets/fonts',
                        },
                    },
                ],
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'assets/images',
                        },
                    },
                ],
            },
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
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack App',
            filename: 'index.html',
            template: 'src/index.html'
        }),
        new CleanWebpackPlugin(),
        new CopyPlugin({
            patterns: [
                { from: 'src/assets', to: 'assets' },

            ],
        }),
        // new MiniCssExtractPlugin({
        //     filename: '[name].css',
        // })

    ]


}