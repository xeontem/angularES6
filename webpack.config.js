var path = require('path');
// var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

module.exports = {
  entry: './js/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
  	rules: [
  		{
	      test: /\.html$/,
	      // include: path.resolve(__dirname, 'templates'),
	      loader: `ngtemplate-loader?relativeTo=${__dirname}/templates/!html-loader`
	    },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
	      test: /\.js$/,
	      exclude: /(node_modules|bower_components)/,
	      use: {
	        loader: 'babel-loader',
	        options: {
	          presets: ['env']
	        }
	      }
      }
    ]
  }
};