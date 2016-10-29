const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

  context: path.join(__dirname, 'webpack'),

  devtool: 'sourcemap',

  entry: {
    a: './entry.js',
    b: './entry2.js'
  },

  module: {
    rules: [{
      loader: ExtractTextPlugin.extract({
        fallbackLoader: 'style-loader',
        loader: [
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader'
          }
        ],
      }),
      test: /\.css$/
    }]
  },

  output: {
    chunkFilename: path.join('js', '[name].js'),
    filename: path.join('js', '[name].js'),
    path: path.join(__dirname, '/src/assets'),
    publicPath: '/assets/'
  },

  plugins: [
    new ExtractTextPlugin({
      allChunks: true,
      disable: false,
      filename: path.join('css', '[name].css')
    })
  ],

  resolve: {
    extensions: [ '.js', '.css', '.pcss' ]
  }

};
