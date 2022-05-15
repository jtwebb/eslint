const common = require('./common');
const merge = require('../helpers/merge');

module.exports = merge(common, {
  env: {
    browser: true
  },
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    '@jtwebb/jsx-uses-vars': 'error',
    '@jtwebb/jsx-uses-react': 'error'
  }
});
