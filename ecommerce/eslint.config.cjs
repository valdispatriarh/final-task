const vuePlugin = require('eslint-plugin-vue');
const tseslint = require('@typescript-eslint/eslint-plugin');
const parser = require('@typescript-eslint/parser');

module.exports = [
  {
    files: ['**/*.js', '**/*.ts', '**/*.vue'],
    languageOptions: {
      parser: parser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
        extraFileExtensions: ['.vue'],
      },
    },
    plugins: {
      vue: vuePlugin,
      '@typescript-eslint': tseslint,
    },
    rules: {
      ...vuePlugin.configs['vue3-recommended'].rules,
      ...tseslint.configs.recommended.rules,
    },
    settings: {},
    linterOptions: {},
    processor: undefined,
    ignores: [],
    extends: ['eslint-config-prettier'],
  },
];
