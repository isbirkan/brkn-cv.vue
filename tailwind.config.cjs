import colors from './src/constants/colors.ts';
import sizes from './src/constants/sizes.ts';

module.exports = {
  content: ['./index.html', './src/**/*.vue'],
  theme: {
    extend: {
      borderColor: {
        'blue-custom': colors.BLUE,
        'white-left': colors.WHITE
      },
      borderWidth: {
        'cst-3': sizes[3],
        'cst-150': sizes[150],
        'cst-240': sizes[240]
      },
      colors: {
        'blue-custom': colors.BLUE,
        'purple-custom-text': colors.PURPLE_TEXT,
        'purple-custom-border': colors.PURPLE_BORDER,
        'gray-custom-light': colors.GRAY_LIGHT,
        'gray-custom-medium': colors.GRAY_MEDIUM,
        'gray-custom-medium-opaque': colors.GRAY_MEDIUM_OPAQUE,
        'gray-custom-dark': colors.GRAY_DARK,
        'white-left': colors.WHITE
      },
      fontFamily: {
        aller: ['Aller', 'sans-serif'],
        bebas: ['"Bebas Neue"', 'cursive']
      },
      fontSize: {
        'cst-10': sizes[10],
        'cst-12.8': sizes[12.8],
        'cst-24': sizes[24],
        'cst-64': sizes[64]
      },
      lineHeight: {
        'cst-14': sizes[14],
        'cst-22': sizes[22],
        'cst-57.6': sizes[57.6]
      },
      spacing: {
        'cst-0': sizes[0],
        'cst-2': sizes[2],
        'cst-6.72': sizes[6.72],
        'cst-8': sizes[8],
        'cst-10': sizes[10],
        'cst-22': sizes[22],
        'cst-24': sizes[24],
        'cst-40': sizes[40],
        'cst-45': sizes[45],
        'cst-150': sizes[150],
        'cst-240': sizes[240],
        'cst-244': sizes[244]
      }
    }
  },
  safelist: [
    'mt-0',
    'mt-1',
    'mt-2',
    'mb-1',
    'pl-5',
    'list-disc',
    'list-inside'
  ],
  plugins: []
};
