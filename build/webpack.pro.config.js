const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackInlineChunkPlugin = require('html-webpack-inline-chunk-plugin');
const Webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const Path = require('path');

module.exports = {
    plugins: [
        // //混淆代码
        // new UglifyJsPlugin({
        //     sourceMap: true
        // }),
        //提取css文件
        new ExtractTextPlugin({
            filename: '[name]-[hash:5].css'
        }),
        new CleanWebpackPlugin(['dist'], {
            root: Path.resolve(__dirname, '../')
        })
    ]
};
