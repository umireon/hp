const cssnext = require('cssnext');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

  context: `${__dirname}/webpack`,

  entry: {
    a: './entry.js',
    b: './entry2.js'
  },

  module: {
    rules: [
      {
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: [
            {
              loader: 'css-loader',
              options: {
                modules: true
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins() {
                  return [
                    cssnext
                  ];
                }
              }
            }
          ],
        }),
        test: /\.css$/
      }
    ]
  },

  output: {
    chunkFilename: '[name].js',
    filename: 'js/[name].js',
    path: `${__dirname}/src/assets`,
    publicPath: '/assets/'
  },

  plugins: [
    new ExtractTextPlugin({
      allChunks: true,
      disable: false,
      filename: 'css/[name].css'
    })
  ]

};
