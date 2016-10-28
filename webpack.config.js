const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

  context: path.join(__dirname, 'webpack'),

  devServer: {
    compress: true,
    contentBase: path.join(__dirname, '_site/hp'),
    hot: true,
    https: false,
    inline: true,
    port: 8080,
    publicPath: '/assets/'
  },

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
            options: {
              discardComments: {
                removeAll: true
              },
              importLoaders: 1,
              sourcemap: true,
              safe: true
            }
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
