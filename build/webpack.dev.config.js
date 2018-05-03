const Webpack = require('webpack');

module.exports = {
    devServer: {
        port: '9090',
        overlay: true,
        //设置为false则会在页面中显示当前webpack的状态
        inline: true,
        historyApiFallback: true,
        hot: true,
        //强制页面不通过刷新页面更新文件
        hotOnly: true
    },
    plugins: [
        //模块热更新插件
        new Webpack.HotModuleReplacementPlugin(),
        //使用HMR时显示模块的相对路径
        new Webpack.NamedModulesPlugin()
    ]
};
