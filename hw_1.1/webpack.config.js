const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src', 'main.js'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].boundle.js'
    },
    module: {
        rules: [
            {
                test: /\\.(png|jpe?g|gif|wav|mp3)$/i, // 1
                use: 'file-loader' // 2
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.html')
        }),
        new BundleAnalyzerPlugin()
    ]

};

