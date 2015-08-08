var Webpack = require('webpack');
var path = require('path');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var buildPath = path.resolve(__dirname, 'public', 'build');
var mainPath = path.resolve(__dirname, 'js', 'app.jsx');

var config = {

    // We change to normal source mapping
    devtool: 'source-map',
    entry: mainPath,
    output: {
        path: buildPath,
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loaders: ['react-hot', 'babel'],
            exclude: /node_modules/
        }, {
            test: /\.jsx$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }, {
            test: /\.scss$/,
            loader: 'style!css!sass'
        }, {
            test: /\.md$/,
            loader: 'raw!markdown'
        }]

    }
};

module.exports = config;