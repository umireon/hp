const autoprefixer = require('autoprefixer');
const precss = require('precss');

module.exports = {
  context: `${__dirname}/src`,
  entry: {style: './entry'},
  module: {
    loaders: [
      {
        loader: 'style-loader!css-loader!postcss-loader',
        test: /\.css$/
      }
    ]
  },
  output: {
    filename: '[name].bundle.css',
    path: `${__dirname}/_site/hp/css`,
    publicPath: '/css/'
  },
  postcss() {
    return [ autoprefixer, precss ];
  },
  resolve: {extensions: [ '', '.css', '.js' ]}
};
