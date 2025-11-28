import type { PrettierConfig } from './types'

import { DEFAULT_CONFIG, IGNORE_FILES } from './constants'

export const king3 = (userConfig: PrettierConfig = {}) => {
  const {
    overrides: userOverrides,
    plugins: userPlugins,
    ...config
  } = userConfig

  const prettierConfig: PrettierConfig = {
    ...DEFAULT_CONFIG,
    ...config,
    overrides: [
      {
        files: [...IGNORE_FILES],
        options: { requirePragma: true }
      },
      {
        files: ['**/jsr.json'],
        options: { parser: 'json-stringify' }
      },
      ...(Array.isArray(userOverrides) ? userOverrides : [])
    ],

    ...(Array.isArray(userPlugins) ? { plugins: userPlugins } : {})
  } satisfies PrettierConfig

  return prettierConfig
}
