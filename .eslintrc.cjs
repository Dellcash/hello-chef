module.exports = {
  root: true,

  parserOptions: {
    ecmaVersion: '2021' // Allows for the parsing of modern ECMAScript features
  },

  env: {
    node: true,
    browser: true,
    'vue/setup-compiler-macros': true
  },

  // Rules order is important, please avoid shuffling them
  extends: ['plugin:vue/vue3-strongly-recommended', 'prettier'],

  plugins: ['vue'],

  globals: {
    ga: 'readonly', // Google Analytics
    cordova: 'readonly',
    __statics: 'readonly',
    __QUASAR_SSR__: 'readonly',
    __QUASAR_SSR_SERVER__: 'readonly',
    __QUASAR_SSR_CLIENT__: 'readonly',
    __QUASAR_SSR_PWA__: 'readonly',
    process: 'readonly',
    Capacitor: 'readonly',
    chrome: 'readonly'
  },

  rules: {
    'brace-style': [2, 'stroustrup', { allowSingleLine: true }],

    'vue/html-indent': [
      'error',
      2,
      {
        attribute: 1,
        baseIndent: 1,
        closeBracket: 0,
        alignAttributesVertically: true,
        ignores: []
      }
    ],
    'vue/first-attribute-linebreak': [
      'error',
      {
        singleline: 'below',
        multiline: 'beside'
      }
    ],
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: {
          max: 1
        },
        multiline: {
          max: 1
        }
      }
    ],
    'vue/padding-line-between-tags': [
      'error',
      [{ blankLine: 'always', prev: '*', next: '*' }]
    ],
    'vue/padding-line-between-blocks': ['error', 'always'],
    'vue/block-order': ['error', {
      order: [['script[setup]', 'template'], 'style']
    }],
    'vue/new-line-between-multi-line-property': ['error', {
      minLineOfMultilineProperty: 2
    }],
    'vue/no-static-inline-styles': ['error', {
      allowBinding: true
    }],

    'vue/attributes-order': [
      'error',
      {
        order: [
          'DEFINITION',
          'LIST_RENDERING',
          'CONDITIONALS',
          'RENDER_MODIFIERS',
          'GLOBAL',
          ['UNIQUE', 'SLOT'],
          'TWO_WAY_BINDING',
          'OTHER_DIRECTIVES',
          'OTHER_ATTR',
          'EVENTS',
          'CONTENT'
        ],
        alphabetical: false
      }
    ],
    'vue/valid-v-for': 0,
    'vue/order-in-components': 'error',
    'vue/no-unused-refs': 'error',
    'vue/no-ref-as-operand': 'error',
    'vue/script-setup-uses-vars': 'error',
    'vue/no-setup-props-destructure': 'off',
    'generator-star-spacing': 'off',
    'arrow-parens': 'off',
    'one-var': 'off',
    'no-void': 'off',
    'multiline-ternary': 'off',
    'no-unused-vars': 'off',
    // 'import/first': 'off',
    // 'import/named': 'error',
    // 'import/namespace': 'error',
    // 'import/default': 'error',
    // 'import/export': 'error',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-undef': 'off',

    'prefer-promise-reject-errors': 'off',

    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}

