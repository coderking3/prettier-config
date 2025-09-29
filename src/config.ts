import type { PrettierConfig } from './types'

export const king3 = (config: PrettierConfig = {}) => {
  const { printWidth = 80, ...otherConfig } = config

  const prettierConfig: PrettierConfig = {
    // default config
    printWidth,
    semi: false,
    singleQuote: true,
    tabWidth: 2,
    trailingComma: 'none',
    useTabs: false,

    // user config
    ...otherConfig,

    // ignore common files
    overrides: [
      {
        files: [
          '**/node_modules/**',
          '**/dist/**',
          '**/coverage/**',
          '**/temp/**',
          '**/.vitepress/cache/**',
          '**/.nuxt/**',
          '**/.vercel/**',
          '**/.changeset/**',
          '**/.idea/**',
          '**/.output/**',
          '**/.vite-inspect/**',

          // root directory
          'output/**',

          '**/CHANGELOG*.md',
          '**/*.min.*',
          '**/LICENSE*',
          '**/__snapshots__',
          '**/auto-import?(s).d.ts',
          '**/components.d.ts',
          '**/typed-router.d.ts',
          '**/pnpm-lock.yaml'
        ],
        options: {
          requirePragma: true
        }
      },
      {
        files: ['**/jsr.json'],
        options: {
          parser: 'json-stringify'
        }
      }
    ]
  }

  return prettierConfig
}
