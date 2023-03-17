/*
 * Author  rhys.zhao
 * Date  2022-08-24 20:11:32
 * LastEditors  rhys.zhao
 * LastEditTime  2023-03-17 11:06:29
 * Description js入口文件
 */
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, useRoutes } from "react-router-dom";

import routes from "./config/router.config";

const App = () => <>{useRoutes(routes)}</>;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* todo: 这里加上basename是因为github部署路由的问题。个人部署可以不用加 */}
    <BrowserRouter basename='/vite-react-template'>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
