import type { PrettierConfig } from './types'

export const king3 = (config: PrettierConfig = {}) => {
  const { printWidth = 80 } = config

  const prettierConfig: PrettierConfig = {
    printWidth,
    semi: false,
    singleQuote: true,
    tabWidth: 2,
    trailingComma: 'none',
    useTabs: false
  }

  return prettierConfig
}

export default king3
