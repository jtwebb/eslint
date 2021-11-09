const common = require('./common');
const merge = require('../helpers/merge');

module.exports = merge(common, {
  env: {
    node: true,
    commonjs: true
  }
});
