import js from '@eslint/js';
import globals from 'globals';

export default [
  {
    ignores: ['dist/', 'node_modules/'],
  },

  js.configs.recommended,

  // BROWSER + NODE
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser, // window, document, console
        ...globals.node,    // module, require, __dirname
      },
    },
  },

  // JEST
  {
    files: ['**/*.test.js', '**/__tests__/**/*.js'],
    languageOptions: {
      globals: {
        ...globals.jest, 
      },
    },
  },
];
