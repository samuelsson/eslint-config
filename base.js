module.exports = {
  extends: [
    'airbnb-base',
    'plugin:import/errors',

    // This extension does the following so we don't have to set it manually:
    // - Enables eslint-plugin-prettier under `plugins`.
    // - Sets the prettier/prettier to "error" under `rules`.
    // - Extends the eslint-config-prettier configuration - turn of ESLint
    //   rules that might conflict with Prettier.
    'plugin:prettier/recommended',
  ],
  rules: {
    'import/prefer-default-export': 0,
    'no-use-before-define': [0],
  },
  env: {
    es6: true,
  },
};
