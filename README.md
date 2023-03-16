<!--
 * Author  rhys.zhao
 * Date  2022-08-25 10:38:32
 * LastEditors  rhys.zhao
 * LastEditTime  2023-03-16 17:38:13
 * Description readme文件
-->

# 1.项目描述

基于 vite 的 react 项目模板

在线预览地址：[https://rhyszhao.github.io/vite-react-template/](https://rhyszhao.github.io/vite-react-template/)

# 2.项目目录

```
├─ .husky                     // git hook 配置
├─ public
│  └─ favicon.svg
├─ src
│  ├─ assets
│  │  ├─ example.png
│  │  └─ react.svg
│  ├─ components              // 组件目录
│  │  └─ Marquee
│  │     ├─ index.jsx
│  │     └─ index.module.scss
│  ├─ config
│  │  └─ router.config.jsx    // 路由配置
│  ├─ layout                  // 布局目录
│  │  └─ BasicLayout
│  │     ├─ index.jsx
│  │     └─ index.module.scss
│  ├─ pages                   // 页面目录
│  │  ├─ ArticleList
│  │  │  ├─ index.jsx
│  │  │  └─ index.module.scss
│  │  ├─ Detail
│  │  │  ├─ index.jsx
│  │  │  └─ index.module.scss
│  │  ├─ Home
│  │  │  ├─ index.jsx
│  │  │  └─ index.module.scss
│  │  └─ NotFound
│  │     ├─ index.jsx
│  │     └─ index.module.scss
│  ├─ services              // api目录
│  │  ├─ api
│  │  │  └─ test.js
│  │  ├─ api.js
│  │  └─ request.js
│  └─ main.jsx
├─ .env.development        // 开发环境环境变量定义
├─ .env.production         // 生产环境环境变量定义
├─ .eslintrc.cjs           // eslint配置
├─ .prettierrc.cjs         // prettier配置
├─ .stylelintrc.cjs        // stylelint配置
├─ LICENSE
├─ README.md
├─ index.html
├─ package.json
└─ vite.config.js
```

# 3.安装依赖

```
yarn install
```

or

```
cnpm install
```

# 4.启动

```
npm start
```

or

```
npm run dev
```
