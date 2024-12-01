module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    "prettier",
  ],
  overrides: [
    {
      env: {
        node: true
      },
      files: [
        '.eslintrc.{js,cjs}'
      ],
      parserOptions: {
        'sourceType': 'script'
      }
    }
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint',
    'react',
    "react-hooks",
    "prettier",
    "simple-import-sort"
  ],
  rules: {
    'react/react-in-jsx-scope': 0,
    "max-len": [ "warn", { "code": 80, "ignoreStrings": true, "ignoreTemplateLiterals": true } ]
  }
};
