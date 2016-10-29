/* eslint no-process-env: 0 */
/* eslint sort-keys: 0 */

const cssnanoOption = () => {
  if (process.env.NODE_ENV === 'development') {
    return false;
  }
  const option = {
    'autoprefixer': {
      add: true,
      browsers: [
        /* ref: http://browserl.ist/?q=last+2+versions */
        'last 2 versions',
        '> 1%'
      ],
    },
    'normalizeCharset': {
      add: true
    }
  };

  return option;
};

module.exports = {
  map: false,
  plugins: {
    'postcss-apply': {},
    'postcss-custom-media': {},
    'postcss-custom-properties': {},
    'postcss-font-smoothing': {},
    'postcss-initial': {},
    'postcss-media-minmax': {},
    'postcss-nesting': {},
    // NOTE: Don't change the order below.
    'postcss-autoreset': {
      reset: {
        padding: 0,
        margin: 0,
        borderRadius: 0
      }
    },
    'cssnano': cssnanoOption()
  }
};
