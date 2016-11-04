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
    'postcss-custom-media': {
      'extensions': {
        '--desktop': 'screen and (width >= 48em)',
        '--tablet': 'screen and (width <= 48em)',
        '--mobileL': 'screen and (width <= 27em)',
        '--mobileM': 'screen and (width <= 23em)',
        '--mobileS': 'screen and (width <= 20em)',
      }
    },
    'postcss-media-minmax': {},
    'postcss-custom-properties': {},
    'postcss-apply': {},
    'postcss-font-smoothing': {},
    'postcss-initial': {},
    'postcss-nesting': {},
    // NOTE: Don't change the order below.
    // 'postcss-autoreset': {
    //   reset: {
    //     padding: 0,
    //     margin: 0,
    //     borderRadius: 0
    //   }
    // },
    'cssnano': cssnanoOption(),
  }
};
