module.exports = {
  map: false,
  plugins: {
    'autoprefixer': {
      browsers: [
        /* ref: http://browserl.ist/?q=last+2+versions */
        'last 2 versions',
        '> 1%'
      ]
    },
    'postcss-browser-reporter': {},
    'postcss-custom-properties': {
      preserve: false,
      strict: true,
      variables: {},

    },
    'postcss-discard-comments': {}
  }
};
