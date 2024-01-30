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
        'cst-3': sizes[3],
        'cst-150': sizes[150],
        'cst-240': sizes[240]
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
        'cst-0': sizes[0],
        'cst-2': sizes[2],
        'cst-8': sizes[8],
        'cst-24': sizes[24],
        'cst-40': sizes[40],
        'cst-150': sizes[150],
        'cst-240': sizes[240],
        'cst-244': sizes[244]
      }
    }
  },
  plugins: []
};
