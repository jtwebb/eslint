module.exports = {
  env: {
    es6: true,
    es2017: true,
    es2020: true,
    es2021: true
  },
  extends: [
    'eslint:recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'script',
    ecmaFeatures: {
      impliedStrict: true
    }
  },
  plugins: ['@jtwebb/eslint-plugin'],
  ignorePatterns: ['node_modules/', 'var/**/*'],
  rules: {
    'comma-dangle': ['error', 'never'],
    'consistent-return': 'off',
    'curly': 'error',
    'dot-notation': 'error',
    'eol-last': 'error',
    'eqeqeq': 'error',
    'func-names': 'off',
    'linebreak-style': 'off',
    'max-len': ['error', { code: 100, ignoreComments: true, ignoreTrailingComments: false, tabWidth: 2 }],
    'no-buffer-constructor': 'error',
    'no-caller': 'error',
    'no-cond-assign': 'error',
    'no-console': 'off',
    'no-const-assign': 'error',
    'no-debugger': 'off',
    'no-dupe-keys': 'error',
    'no-empty': 'off',
    'no-irregular-whitespace': 'error',
    'no-param-reassign': 'off',
    'no-plusplus': 'off',
    'no-undef': 'error',
    'no-underscore-dangle': 'off',
    'no-unused-vars': ['error', { ignoreRestSiblings: true }],
    'object-shorthand': ['error', 'always'],
    'prefer-const': 'error',
    'prefer-template': 'error',
    'quotes': ['error', 'single', { allowTemplateLiterals: true, avoidEscape: true }],
    'semi': ['error', 'always']
  }
};
