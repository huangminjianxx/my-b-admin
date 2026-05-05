module.exports = {
    root: true,
    env: {
      browser: true,
      es2021: true,
      node: true
    },
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:react/recommended',
      'plugin:react-hooks/recommended',
      'plugin:react-refresh/recommended',
      'plugin:prettier/recommended'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true
      }
    },
    plugins: ['react', '@typescript-eslint', 'react-hooks'],
    settings: {
      react: { version: 'detect' }
    },
    rules: {
      // 关闭未使用变量报错（宽松版，适合开发）
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      // 禁止 any
      '@typescript-eslint/no-explicit-any': 'warn',
      // react 不需要导入react
      'react/react-in-jsx-scope': 'off',
      // 关闭 prop-types
      'react/prop-types': 'off',
      // 禁止 console
      'no-console': ['warn', { allow: ['warn', 'error'] }]
    }
  }