const tsOption = {
  arrowParens: 'avoid',
  jsxSingleQuote: true,
  bracketSameLine: true,
  singleQuote: true,
  semi: true,
  bracketSpacing: true,
  useTabs: false,
  tabWidth: 2,
  trailingComma: 'all',
  printWidth: 100,
  endOfLine: 'auto',
  plugins: ['@trivago/prettier-plugin-sort-imports'],
  importOrder: [
    'use client',
    '^next(.*)$',
    '^react$',
    '^@/hooks(.*)$',
    '^@/util(.*)$',
    '^@/constants(.*)$',
    '^@/templates(.*)$',
    '^@/components(.*)$',
    '^@/app(.*)$',
    '^@/assets(.*)$',
    '^@/types(.*)$',
    '^@/styles(.*)$',
    '^@/public(.*)$',
    '<THIRD_PARTY_MODULES>',
    '^[./]',
    '^(.*)(?:.css)$',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};

module.exports = {
  overrides: [
    {
      files: '*.{ts,tsx}',
      options: {
        ...tsOption,
      },
    },
    {
      files: '*.{js,jsx}',
      options: {
        ...tsOption,
        printWidth: 80,
      },
    },
    {
      files: '*.{scss}',
      options: {
        singleQuote: false,
        semi: true,
        useTabs: true,
        tabWidth: 4,
      },
    },
    {
      files: '*.{css}',
      options: {
        singleQuote: false,
        semi: true,
        useTabs: true,
        tabWidth: 4,
      },
    },
  ],
};
