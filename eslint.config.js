import { king3 } from '@king-3/eslint-config'

export default king3(
  {
    typescript: true
  },
  {
    rules: {
      'antfu/no-import-dist': 'off'
    }
  }
)
