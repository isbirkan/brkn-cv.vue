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
          'custom-dark': colors.GRAY_DARK
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
        24: sizes[24],
        150: sizes[150],
        240: sizes[240]
      }
    }
  },
  plugins: []
};
