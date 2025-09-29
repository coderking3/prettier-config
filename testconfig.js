const config = {
  semi: false,
  tabWidth: 2,
  singleQuote: true,
  trailingComma: 'none',
  useTabs: false,
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
console.log(`🚀 ~ config:`, config)
