const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'ScriptTimestampWebpackPlugin.js',
        umdNamedDefine: true,
        libraryTarget: "umd",
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        cacheDirectory: true
                    }
                }],
                exclude: /(node_modules|bower_components)/,
            }
        ]
    },
    plugins: [
        new UglifyJsPlugin({
            cache: true,
            parallel: true,
            sourceMap: true
        })
    ]
}