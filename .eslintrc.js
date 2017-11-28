module.exports = {
  extends: 'airbnb',
  rules: {
    'react/jsx-filename-extension': 0,
    'react/prefer-stateless-function': 0, //temp
    'jsx-a11y/anchor-is-valid': 0,
    'react/prop-types': 0,
    'jsx-a11y/label-has-for': 0
  },
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true
  }
};
