module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['react', 'prettier', '@typescript-eslint/eslint-plugin'],
  extends: ['react-app', 'airbnb-typescript', 'prettier'],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
      },
    ],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'react/jsx-filename-extension': [
      2,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    'global-require': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'import/prefer-default-export': 'off',
    'react/prop-types': 'off',
  },
  ignorePatterns: ['.eslintrc.js'],
};
