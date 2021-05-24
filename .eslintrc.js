/* eslint-env node */
const baseExtends = [
  'eslint:recommended',
  'plugin:@typescript-eslint/recommended',
  'plugin:vue/vue3-recommended',
]

module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  plugins: [
    '@typescript-eslint',
  ],
  extends: baseExtends,
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    parser: '@typescript-eslint/parser',
    extraFileExtensions: [
      '.vue',
    ],
  },
  overrides: [
    {
      files: ["src/**/*.ts", "src/**/*.d.ts", "src/**/*.tsx", "src/**/*.vue"],
      extends: [
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ].concat(baseExtends),
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: [
          './tsconfig.json',
        ],
      },
    }
  ]
};
