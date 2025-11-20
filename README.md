# @king-3/prettier-config

> A minimal and opinionated Prettier config preset with sensible defaults.

[![npm version](https://img.shields.io/npm/v/@king-3/prettier-config.svg)](https://www.npmjs.com/package/@king-3/prettier-config)
[![npm downloads](https://img.shields.io/npm/dm/@king-3/prettier-config.svg)](https://www.npmjs.com/package/@king-3/prettier-config)
[![bundle size](https://img.shields.io/bundlephobia/minzip/@king-3/prettier-config.svg)](https://bundlephobia.com/package/@king-3/prettier-config)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[English](./README.md) | [中文](./README_zh.md)

## Features

- **📏 2 spaces indentation** - Consistent and readable
- **🚫 No semicolons** - Cleaner code style
- **✨ Single quotes** - Less visual noise
- **📝 No trailing commas** - Simplified syntax
- **🎯 Smart ignore patterns** - Automatically skips common build artifacts and lock files
- **⚡ Powered by @prettier/plugin-oxc** - Faster formatting with Oxlint

## Installation

### Quick Setup

```bash
pnpm add -D prettier @king-3/prettier-config
```

Create a `prettier.config.mjs` file in your project root:

```js
// prettier.config.mjs
import king3 from '@king-3/prettier-config'

export default king3()
```

### Add Format Scripts

Add these scripts to your `package.json`:

```json
{
  "scripts": {
    "format": "prettier --write .",
    "format:check": "prettier --check ."
  }
}
```

Then run:

```bash
pnpm format        # Format all files
pnpm format:check  # Check formatting without modifying files
```

## Configuration

### Default Settings

```json
{
  "printWidth": 80,
  "semi": false,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "none",
  "useTabs": false
}
```

### Custom Configuration

Override any default setting:

```js
// prettier.config.mjs
import { king3 } from '@king-3/prettier-config'

export default king3({
  printWidth: 120,
  semi: true
  // ... other Prettier options
})
```

### Ignored Files

The following patterns are automatically ignored:

```
**/node_modules/**
**/dist/**
**/coverage/**
**/temp/**
**/.vitepress/cache/**
**/.nuxt/**
**/.vercel/**
**/.changeset/**
**/.idea/**
**/.output/**
**/.vite-inspect/**
output/**
**/CHANGELOG*.md
**/*.min.*
**/LICENSE*
**/__snapshots__
**/auto-import?(s).d.ts
**/components.d.ts
**/typed-router.d.ts
**/pnpm-lock.yaml
```

## Editor Integration

### VS Code

Install the [Prettier extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) and add to your `.vscode/settings.json`:

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true
}
```

## License

[MIT](./LICENSE) License © 2025-PRESENT [king3](https://github.com/coderking3)
