module.exports = {
    root: true,
  
    env: {
      node: true
    },
  
    extends: [
      'plugin:vue/base',
      'plugin:vue/vue3-essential',
      'plugin:vue/vue3-recommended',
      'plugin:vue/vue3-strongly-recommended'
    ],
    parserOptions: {
      ecmaVersion: 2020,
      parser: '@typescript-eslint/parser'
    },
    rules: {
      'brace-style': [
        2,
        '1tbs',
        {
          allowSingleLine: true
        }
      ],
      'comma-dangle': ['error', 'never'],
      'import/extensions': 0,
      'import/prefer-default-export': 0,
      'keyword-spacing': ['error', { before: true }],
      'linebreak-style': 0,
      'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'no-param-reassign': 1,
      'no-plusplus': 0,
      'no-unused-vars': 1,
      quotes: [2, 'single'],
      semi: ['error', 'always'],
      'space-before-function-paren': ['error', 'never'],
      // "vue/attribute-hyphenation": ["error", "always"], // my-prop vs myProp
      'vue/attributes-order': 'error',
      'vue/html-button-has-type': 1,
      'vue/html-end-tags': 2,
      'vue/html-indent': ['error', 2],
      'vue/html-quotes': ['error', 'double'],
      'vue/html-self-closing': 1,
      'vue/max-attributes-per-line': [
        'error',
        {
          singleline: {
            max: 4
          },
          multiline: {
            max: 1
          }
        }
      ],
      'vue/order-in-components': 2,
      'vue/require-default-prop': 2,
      'vue/require-prop-types': 2,
      'vuejs-accessibility/form-control-has-label': 'off',
      'vuejs-accessibility/click-events-have-key-events': 'off'
    },
  
    'extends': [
      'plugin:vue/base',
      'plugin:vue/vue3-essential',
      'plugin:vue/vue3-recommended',
      'plugin:vue/vue3-strongly-recommended',
      '@vue/typescript'
    ]
  };
  