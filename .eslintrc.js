module.exports = {
  env: {
    es6: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:node/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'node/no-unsupported-features/es-syntax': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-duplicate-imports': 'warn',
    'node/no-missing-import': ['off'],
    'no-console': 'off',
    'no-duplicate-imports': 'warn',
    'no-unused-vars': 'warn',
    'comma-dangle': ['off', 'never'],
    'object-curly-spacing': ['warn', 'always'],
  },
};
