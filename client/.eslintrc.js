module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
  },
  plugins: ['react'],
  rules: {
    semi: ['error', 'never'],
    'max-len': 'off',
    indent: 'off',
    'react/jsx-one-expression-per-line': 'off',
    'implicit-arrow-linebreak': 'off',
    'react/jsx-no-bind': 'off',
    'function-paren-newline': 'off',
    'react/prop-types': 'off',
    'object-curly-newline': 'off',
    'operator-linebreak': 'off',
  },
}
