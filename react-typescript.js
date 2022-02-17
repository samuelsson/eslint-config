module.exports = {
  globals: {
    JSX: true,
  },
  parser: '@typescript-eslint/parser',
  extends: [
    './base.js',
    'airbnb',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'plugin:jsx-a11y/recommended',
  ],
  plugins: ['@typescript-eslint'],
  rules: {
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'react/prop-types': 0,
    'react/require-default-props': 0,
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
    '@typescript-eslint/no-use-before-define': [1],
  },
  env: {
    browser: true,
    jest: true,
  },
};
