const WebpackMerge = require('webpack-merge');
const Path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const Webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const DevConfig = require('./webpack.dev.config.js');
const ProConfig = require('./webpack.pro.config.js');

//根据打包方式输出不同配置
const generateConfig = env => {
    //样式解析器
    let cssLoader = [{
        loader: 'css-loader',
        options: {
            sourceMap: true
        }
    }, {
        loader: 'postcss-loader',
        options: {
            ident: 'postcss',
            plugins: [
                require('postcss-cssnext')
            ],
            sourceMap: true
        }
    }, {
        loader: 'less-loader',
        options: {
            sourceMap: true
        }
    }];

    //js解析器
    let jsLoader = [{
        test: /\.js/,
        exclude: /(node_modules|bower_components)/,
        use: [{
            loader: 'babel-loader'
        }]
        // .concat(env === 'dev' ? [{
        //     loader: 'eslint-loader'
        // }] : [])
    }];

    //文件解析器
    let fileLoaderOptions = {
        useRelativePath: true,
        name: '[name]-[hash:5].[ext]'
    };
    if (env === 'pro') {
        fileLoaderOptions.limit = 10000;
    }

    let fileLoader = [{
        test: /\.(jpg|jpeg|png|icon)$/,
        exclude: /(node_modules|bower_components)/,
        use: [{
            loader: env === 'dev' ? 'file-loader' : 'url-loader',
            options: fileLoaderOptions
        }]
    }, {
        test: /\.(eot|svg|ttf|woff2?)$/,
        exclude: /(node_modules|bower_components)/,
        use: [{
            loader: env === 'dev' ? 'file-loader' : 'url-loader',
            options: fileLoaderOptions
        }]
    }, {
        test: /\.html$/,
        exclude: /(node_modules|bower_components)/,
        use: {
            loader: 'html-loader',
            options: {
                attrs: ['img:src', 'img:data-src'],
                minimize: true
            }
        }
    }];

    //解析器集合
    let loaders = [{
        test: /\.less$/,
        exclude: /(node_modules|bower_components)/,
        use: env === 'pro' ? ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: cssLoader
        }) : [{
            loader: 'style-loader'
        }].concat(cssLoader)
    }].concat(jsLoader).concat(fileLoader);

    //插件
    let plugins = [
        new HtmlWebpackPlugin({
            template: Path.resolve(__dirname, '../src/index.html'),
            inject: true,
            filename: 'main.html',
            chunks: ['index']
        }),
        new HtmlWebpackPlugin({
            template: Path.resolve(__dirname, '../src/log/log.html'),
            inject: true,
            filename: 'index.html',
            chunks: ['log']
        }),
        new CopyWebpackPlugin([{
            from: './libs',
            to: 'libs/'
        }]),
        new CopyWebpackPlugin([{
            from: './src/config/config.js',
            to: 'config.js'
        }])
    ];

    let config = {
        entry: {
            'index': './src/index',
            'log': './src/log/log'
        },
        output: {
            filename: '[name]-[hash:5].bundle.js',
            path: Path.resolve(__dirname, '../dist')
        },
        devtool: 'source-map',
        resolve: {
            alias: {}
        },
        module: {
            rules: loaders
        },
        plugins: plugins
    };

    return config;
};

module.exports = env => {
    //固定配置
    let config = env === 'dev' ? DevConfig : ProConfig;

    return WebpackMerge(generateConfig(env), config);
};
