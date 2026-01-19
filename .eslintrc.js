module.exports = {
  root: true,
  extends: '@react-native',
  rules: {
    // 禁用基础的 no-unused-vars，使用 TypeScript 版本
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        ignoreRestSiblings: true
      }
    ],
    'no-console': 'warn',
    'prefer-const': 'warn',
    'no-var': 'error',
    // 分号和逗号规则
    'semi': ['error', 'always'],
    'comma-dangle': ['error', 'never']
  }
};
