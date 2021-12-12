module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parserOptions: { ecmaVersion: 8, sourceType: 'module' }, // to enable features such as async/await
  ignorePatterns: ['node_modules/*', 'build/*', '!.prettierrc.js'], // We don't want to lint generated files nor node_modules, but we want to lint .prettierrc.js (ignored by default by eslint)
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  rules: {
    'prettier/prettier': ['error', { endOfLine: 'auto' }, { usePrettierrc: true }],
    'no-console': 'warn',
  },
};
