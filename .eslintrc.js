module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'next/core-web-vitals',
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-useless-constructor': 'off',
    'semi': ['error', 'never'],
    '@typescript-eslint/no-explicit-any': 'off'
  }
}
