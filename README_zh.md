# @king-3/prettier-config

> 一个简洁且固执己见的 Prettier 配置预设，提供合理的默认设置。

[![npm version](https://img.shields.io/npm/v/@king-3/prettier-config.svg)](https://www.npmjs.com/package/@king-3/prettier-config)
[![npm downloads](https://img.shields.io/npm/dm/@king-3/prettier-config.svg)](https://www.npmjs.com/package/@king-3/prettier-config)
[![bundle size](https://img.shields.io/bundlephobia/minzip/@king-3/prettier-config.svg)](https://bundlephobia.com/package/@king-3/prettier-config)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[English](./README.md) | [中文](./README_zh.md)

## ✨ 特性

- **📏 2 空格缩进** - 统一且易读
- **🚫 无分号** - 更清爽的代码风格
- **✨ 单引号** - 减少视觉干扰
- **📝 无尾随逗号** - 简化语法
- **🎯 智能忽略模式** - 自动跳过常见的构建产物和锁文件
- **⚡ 基于 @prettier/plugin-oxc** - 使用 Oxlint 实现更快的格式化

## 📦 安装

### 快速开始

```bash
pnpm add -D prettier @king-3/prettier-config
```

在项目根目录创建 `prettier.config.mjs` 文件：

```js
// prettier.config.mjs
import king3 from '@king-3/prettier-config'

export default king3()
```

### 添加格式化脚本

在 `package.json` 中添加以下脚本：

```json
{
  "scripts": {
    "format": "prettier --write .",
    "format:check": "prettier --check ."
  }
}
```

然后运行：

```bash
pnpm format        # 格式化所有文件
pnpm format:check  # 检查格式化而不修改文件
```

## ⚙️ 配置

### 默认设置

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

### 自定义配置

覆盖任何默认设置：

```js
// prettier.config.mjs
import { king3 } from '@king-3/prettier-config'

export default king3({
  printWidth: 120,
  semi: true
  // ... 其他 Prettier 选项
})
```

### 忽略的文件

以下模式会被自动忽略：

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

## 🔧 编辑器集成

### VS Code

安装 [Prettier 扩展](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) 并在 `.vscode/settings.json` 中添加：

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true
}
```

## 📄 许可证

[MIT](./LICENSE) License © 2025-至今 [king3](https://github.com/coderking3)
