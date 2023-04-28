# API 文档

## 抓取数据
```bash
pnpm spider
```

从 showdoc.izehui.local 中抓取文档，并将文档保存在 _static/docs/_ 目录下

## 本地开发模式
```bash
# 启动服务（主要提供搜索 api）
pnpm api

# 启动静态页面（vitepress 开发模式）
pnpm static
```

## 生产打包
```bash
pnpm build
```

## 创建 Windows 服务
```bash
pnpm installWinService
```

将项目根目录下的 _dist_ 目录作为生产站点目录

## 完成的生产打包
```bash
# 1. 抓数据（如果需要更新最新文档）
pnpm spider

# 2. 构建代码
pnpm build
```
