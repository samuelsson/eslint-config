module.exports = {
  globals: {
    JSX: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/typescript',
    'plugin:jsx-a11y/recommended',
    'plugin:@next/next/recommended',

    // This extension does the following, so we don't have to set it manually:
    // - Enables eslint-plugin-prettier under `plugins`.
    // - Sets the prettier/prettier to "error" under `rules`.
    // - Extends the eslint-config-prettier configuration - turn of ESLint
    //   rules that might conflict with Prettier.
    'plugin:prettier/recommended',
  ],
  rules: {
    'import/prefer-default-export': 0,
    'no-use-before-define': [0],
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
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
    'react/prop-types': 0,
    'react/require-default-props': 0,
    '@typescript-eslint/explicit-function-return-type': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-use-before-define': [1],
  },
  env: {
    browser: true,
    es6: true
  },
};
