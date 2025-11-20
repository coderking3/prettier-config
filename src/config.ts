import type { PrettierConfig } from './types'
import { fileURLToPath } from 'node:url'
import { DEFAULT_CONFIG, IGNORE_FILES } from './constants'

export const king3 = (
  userConfig: Omit<PrettierConfig, 'overrides' | 'plugins'> = {}
) => {
  const prettierConfig: PrettierConfig = {
    ...DEFAULT_CONFIG,
    ...userConfig,
    overrides: [
      {
        files: [...IGNORE_FILES],
        options: { requirePragma: true }
      },
      {
        files: ['**/jsr.json'],
        options: { parser: 'json-stringify' }
      }
    ],

    plugins: [fileURLToPath(import.meta.resolve('@prettier/plugin-oxc'))]
  } satisfies PrettierConfig

  return prettierConfig
}
