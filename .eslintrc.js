/** @type {import('eslint').Linter.Config} */
module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:sonarjs/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js', 'jest.config.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-floating-promises': 'error',
    '@typescript-eslint/no-misused-promises': 'error',
    'no-console': 'error',
  },
  overrides: [
    {
      files: ['*.ts'],
      excludedFiles: ['*.spec.ts'],
      extends: [
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
    },
    {
      files: ['*.spec.ts'],
      rules: {
        '@typescript-eslint/no-explicit-any': 'off',
        'sonarjs/no-identical-functions': 'off',
        'sonarjs/no-duplicate-string': 'off',
      },
      extends: ['plugin:jest/recommended', 'plugin:jest/style'],
    },
    {
      files: ['main.ts'],
      rules: {
        '@typescript-eslint/no-floating-promises': 'off',
      },
    },
  ],
};
