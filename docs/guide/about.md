---
title: 关于飞冰
order: 1
cover: https://gw.alicdn.com/tfs/TB1vBRYaVOWBuNjy0FiXXXFxVXa-2558-1306.jpg
---

## 特性

- **React 研发框架**：通过 icejs 研发框架集成目录规范、路由、状态管理、样式、权限管理、微前端等最佳实践
- **可视化智能开发助手**：通过 VS Code 插件集合 Iceworks 简化前端工程复杂度，提供可视化、配置化等能力
- **丰富的物料**：基于物料拼装提高项目开发效率，同时提供丰富的 React/Vue 物料
- **自定义物料**：不同团队可基于物料开发工具快速开发构建私有的物料体系

## 生态

### ice.js

> 开箱即用的 React 研发框架

- 提供 React 项目开发的最佳实践，包含工程配置、路由、状态管理、数据请求、调试日志等解决方案
- 开箱即用的工程能力，包含 TypeScript、Less/Sass/CSS Modules 等，无需关心繁琐的 webpack 基础配置
- 结合阿里业务沉淀的大量开发规范，包括目录规范、代码风格、单元测试等方面
- 约定优于配置的设计理念，让开发者能够更加专注于业务逻辑开发

### Iceworks

> 基于 VS Code 插件的可视化开发助手

- 在 VS Code 中支持可视化创建项目、启动调试等能力
- 提供强大的代码智能提示能力，让编码更加智能

### 物料

- 支持 Fusion Design、Ant Design、ElementUI 等不同 UI 组件的官方物料
- 提供强大的自定义物料能力，不同团队可以快速定制脚手架、沉淀业务相关物料
- 通过 Fusion 物料中心的托管，可以快速形成物料文档
- 结合 Iceworks 可以方便的在 VS Code 中使用消费开发好的物料

### 领域解决方案

- icestark：面向大型工作台的微前端解决方案
- ahooks：提供丰富的 React Hooks 选择

### 相关链接

|    GitHub         |    npm                                 |     文档    |   描述       |
|----------------|-----------------------------------------|--------------|-----------|
| [icejs](https://github.com/alibaba/ice) | ![](https://img.shields.io/npm/v/ice.js.svg) | [docs](/docs/guide/intro) |基于 React 的通用框架|
| [Iceworks](https://github.com/ice-lab/iceworks) | ![](https://vsmarketplacebadge.apphb.com/version-short/iceworks-team.iceworks.svg?logo=visual-studio-code) | [docs](/docs/iceworks/about) |可视化智能开发助手|
| [icestark](https://github.com/ice-lab/icestark) | ![](https://img.shields.io/npm/v/@ice/stark.svg) | [docs](/docs/icestark/guide/about) |面向大型应用的微前端解决方案|
| [icestore](https://github.com/ice-lab/icestore) | ![](https://img.shields.io/npm/v/@ice/store.svg) | [docs](https://github.com/ice-lab/icestore#icestore) |轻量简洁的状态管理方案|
| [ahooks](https://github.com/ice-lab/icestore) | ![](https://img.shields.io/npm/v/ahooks.svg) | [docs](https://ahooks.js.org/zh-CN) |基于业务沉淀的丰富完备的 React Hooks|

## 常见问题

#### 使用飞冰是否需要具备一定的前端基础？

毫无疑问是需要的，我们在努力降低前端开发的门槛，但一些基础的前端知识还是需要具备的，比如 JavaScript 的基础语法、前后端如何通信等。为了便于快速入门前端知识，我们整理了一份 [前端基础知识](/docs/guide/resource/front-basic)，希望能帮助到开发者。

#### 资深前端同学是否适合使用飞冰？

适合，面向前端场景飞冰团队有大量的最佳实践，无论是工程、规范、状态管理还是微前端都可以开箱即用。

#### 飞冰的浏览器兼容策略是怎样的？

飞冰官方 React 物料默认使用 React 16+，其需要的最低 IE 版本为 11，如果您需要在以下的版本使用，您可能需要引入一些 polyfill 来支持 `Map`, `Set` 等特性。参考[React 官网说明](https://reactjs.org/blog/2017/09/26/react-v16.0.html#javascript-environment-requirements)。

#### 飞冰可以使用哪些 UI 组件？

飞冰的框架和工具都不耦合 UI 组件，因此开发者可以选择自己喜欢的 UI 组件使用，比如：

- [使用 fusion 组件](/docs/guide/advance/fusion)
- [使用 antd 组件](/docs/guide/advance/antd)

## 谁在使用

- 淘宝&天猫
- 飞猪
- 菜鸟
- 阿里体育
- 阿里健康
- 优酷
- 阿里云
- ……

## 联系我们

* 邮件：<mailto:ice-admin@alibaba-inc.com>
* 反馈/建议：<https://github.com/alibaba/ice/issues/new>
* 答疑钉钉群，**内部同学请搜索「飞冰（ICE）万能群」**：

  <img src="http://ice.alicdn.com/assets/images/qrcode.png" width="300" />
