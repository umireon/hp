module.exports = {
  map: false,
  plugins: {
    'cssnano': {
      'autoprefixer': {
        add: true,
        browsers: [
          /* ref: http://browserl.ist/?q=last+2+versions */
          'last 2 versions',
          '> 1%'
        ],
      },
      'core': false,
      'normalizeCharset': {
        add: true
      }
    },
    'postcss-apply': {},
    'postcss-custom-media': {},
    'postcss-custom-properties': {},
    'postcss-media-minmax': {},
    'postcss-nesting': {},
  }
};
