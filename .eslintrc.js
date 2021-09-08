module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:@next/next/recommended',
    'plugin:react/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'jsx-a11y/control-has-associated-label': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    '@next/next/no-img-element': 'off',
    'max-len': 'off',
    'no-mixed-operators': 'off',
    'no-use-before-define': 'off',
    'object-curly-newline': 'off',
    'operator-linebreak': 'off',
    'react/jsx-filename-extension': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-wrap-multilines': 'off',
    'react/no-array-index-key': 'off',
    'react/no-danger': 'off',
    'react/no-unescaped-entities': 'off',
    'react/prop-types': 'off'
  },
};
