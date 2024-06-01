// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginCypress from 'eslint-plugin-cypress/flat';

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  pluginCypress.configs.recommended,
  {
    files: ['cypress/**/*.ts'],
    languageOptions: {
      globals: {
        commonjs: true,
        es2021: true,
        node: true,
        'cypress/globals': true,
      },
      parserOptions: {
        ecmaVersion: 12,
      },
    },
    rules: {},
  },
);
