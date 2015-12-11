var webpack = require('webpack');
var config = require('./config.js')

module.exports = {
	devtool: 'eval', // map console errors to file/line number
	entry: config.paths.PUBLIC + 'js/app.jsx',
	output: {
		path: config.paths.PUBLIC + '/js/build',
		filename: 'bundle.js',
	},
	module: {
		loaders: [
			{
				__isBabel: true,
				test: /(\.babel\.js$|\.jsx$)/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel-loader',
				query: {
					cacheDirectory: true,
					presets: ['es2015', 'react'],
					plugins: ['transform-runtime'],
				}
			},
			{
				test: require.resolve('react'),
				loader: 'expose?React',
			},
			{
				test: require.resolve('underscore'),
				loader: 'expose?_!expose?Underscore',
			},
			{
				test: require.resolve('backbone'),
				loader: 'expose?Backbone',
			},
			{
				test: require.resolve('jquery'),
				loader: 'expose?$!expose?jQuery',
			},
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader',
			}
		],
	},
	resolve: {
		extensions: ['', '.js', '.jsx', '.json']
	}
}
