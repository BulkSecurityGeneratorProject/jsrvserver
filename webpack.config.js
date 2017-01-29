'use strict';

let debug = process.env.NODE_ENV !== 'production',
    webpack = require('webpack'),
    path = require('path');

module.exports = {
    context: path.join(__dirname, 'src'),
    devtool: debug ? 'inline-sourcemap' : null,
    entry: './main/webapp/js/index.js',
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0'],
                    plugins: ['react-html-attrs', 'transform-decorators-legacy', 'transform-class-properties'],
                }
            },
            {
                test: /\.s?css$/,
                exclude: /node_modules/,
                loaders: ['style', 'css', 'sass']
            }
        ]
    },
    output: {
        path: __dirname + '/src/main/webapp/',
        filename: 'index.min.js'
    },
    plugins: debug ? [
        //new webpack.HotModuleReplacementPlugin()
    ] : [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
    ]
};
