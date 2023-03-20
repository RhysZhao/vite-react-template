<!--
 * Author  rhys.zhao
 * Date  2022-08-25 10:38:32
 * LastEditors  rhys.zhao
 * LastEditTime  2023-03-20 11:48:22
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
npm install
```

# 4.启动

注意：

本地启动前删除`/src/main.jsx`文件中的 basename。

之所以加 basename 是为了能够在 github pages 看到效果。

```js
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* todo: 这里加上basename是因为github部署路由的问题。个人部署需要删除 */}
    <BrowserRouter basename='/vite-react-template'>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
```

```
npm start
```

or

```
npm run dev
```
