# @king-3/prettier-config

[![npm version](https://img.shields.io/npm/v/@king-3/prettier-config.svg)](https://npmjs.com/package/@king-3/prettier-config)
[![npm downloads](https://img.shields.io/npm/dm/@king-3/prettier-config)](https://www.npmcharts.com/compare/@king-3/prettier-config?interval=30)

Prettier config.

## Install

```bash
npm i -D @king-3/prettier-config
```

## Usage

create .prettierrc.js(mjs|cjs)

```javascript
import { king3 } from '@king-3/prettier-config'

export default king3({
  // printWidth default 80
  printWidth: 120
})
```

## Features

- 2 spaces
- No semicolons
- Single quotes
- Trailing commas
- Ignore common files (`dist`, `pnpm-lock.yaml`...)

## License

[MIT](./LICENSE) License © 2025-PRESENT [King3](https://github.com/coderking3)
