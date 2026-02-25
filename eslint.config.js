// Flat config for ESLint (CommonJS — no "type":"module" in package.json)
module.exports = [
  // Global ignore patterns
  {
    ignores: ['node_modules/**', 'dist/**']
  },
  // Apply rules to JS/TS files
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    languageOptions: {
      parser: require('@typescript-eslint/parser'),
      ecmaVersion: 2021,
      sourceType: 'module',
      parserOptions: { ecmaFeatures: { jsx: true } }
    },
    plugins: {
      react: require('eslint-plugin-react'),
      'react-hooks': require('eslint-plugin-react-hooks'),
      '@typescript-eslint': require('@typescript-eslint/eslint-plugin')
    },
    linterOptions: {
      reportUnusedDisableDirectives: true
    },
    settings: { react: { version: 'detect' } },
    rules: {}
  }
];
