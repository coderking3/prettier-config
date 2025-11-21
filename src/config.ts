import type { PrettierConfig } from './types'

import { DEFAULT_CONFIG, IGNORE_FILES, PRESET_PLUGINS } from './constants'

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

    plugins: [
      ...PRESET_PLUGINS,
      ...(Array.isArray(userPlugins) ? userPlugins : [])
    ]
  } satisfies PrettierConfig

  return prettierConfig
}
