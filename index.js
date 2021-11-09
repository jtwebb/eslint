const allRules = {
  'jsx-uses-vars': require('./lib/rules/jsx-uses-vars')
};

module.exports = {
  rules: allRules,
  configs: {
    common: require('./lib/configs/common'),
    react: require('./lib/configs/react'),
    node: require('./lib/configs/node')
  }
};
