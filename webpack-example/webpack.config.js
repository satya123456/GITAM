const webpack = require('webpack'); // installed module
const path = require('path'); // built-in module
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
     entry: './src/index.js',
      output: {
            filename: 'bundle.[contenthash:8].js',
            path: __dirname + '/dist',
    },
    target: ['web', 'es5'],
    module: {
        rules : [
            {
                test : /\.js$/,
                use : 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: path.resolve(__dirname) + "/src/index.html"
    })],
}