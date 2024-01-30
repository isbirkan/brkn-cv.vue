import colors from './src/constants/colors.ts';
import sizes from './src/constants/sizes.ts';

module.exports = {
  content: ['./index.html', './src/**/*.vue'],
  theme: {
    extend: {
      borderColor: {
        blue: {
          custom: colors.BLUE
        }
      },
      borderWidth: {
        3: sizes[3],
        150: sizes[150],
        240: sizes[240]
      },
      colors: {
        blue: {
          custom: colors.BLUE
        },
        gray: {
          'custom-dark': colors.GRAY_DARK,
          'sidebar-decoration': colors.GRAY_SIDEBAR_DECORATION
        },
        white: {
          left: colors.WHITE
        }
      },
      fontFamily: {
        aller: ['Aller', 'sans-serif']
      },
      spacing: {
        0: sizes[0],
        0.125: sizes[0.125],
        0.5: sizes[0.5],
        24: sizes[24],
        40: sizes[40],
        150: sizes[150],
        240: sizes[240]
      }
    }
  },
  plugins: []
};
