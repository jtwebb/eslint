const allRules = {
  'jsx-uses-vars': require('./lib/rules/jsx-uses-vars'),
  'jsx-uses-react': require('./lib/rules/jsx-uses-react')
};

module.exports = {
  rules: allRules,
  configs: {
    common: require('./lib/configs/common'),
    react: require('./lib/configs/react'),
    node: require('./lib/configs/node')
  }
};
