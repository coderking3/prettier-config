export const DEFAULT_CONFIG = {
  printWidth: 80,
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'none',
  useTabs: false
} as const

export const IGNORE_FILES = [
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
  'output/**',
  '**/CHANGELOG*.md',
  '**/*.min.*',
  '**/LICENSE*',
  '**/__snapshots__',
  '**/auto-import?(s).d.ts',
  '**/components.d.ts',
  '**/typed-router.d.ts',
  '**/pnpm-lock.yaml'
] as const
