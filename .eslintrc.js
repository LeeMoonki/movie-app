module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  parserOptions: { ecmaVersion: 8 },
  extends: ['eslint:recommended',],
  overrides: [
    {
      files: ['src/**/*.ts?(x)'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      env: {
        browser: true,
        node: true,
        es6: true,
        jest: true,
      },
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:prettier/recommended',
        'prettier',
      ],
      rules: {
        'prettier/prettier': ['error', {}, { usePrettierrc: true }],

        '@typescript-eslint/explicit-module-boundary-types': 'off', // react component는 반환값을 설정하지 않아도 됩니다.
        'react/react-in-jsx-scope': 'off', // v17 이후 부턴 React를 반드시 import하지 않아도 됩니다.

        'no-console': ['off', { allow: ['warn', 'error'] }],
        'eqeqeq': 'off',

        'react/prop-types': 'off',
        'react/display-name': 'off',
      },
    }
  ]
};
