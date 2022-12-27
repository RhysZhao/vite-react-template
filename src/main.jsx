/*
 * Author  rhys.zhao
 * Date  2022-08-24 20:11:32
 * LastEditors  rhys.zhao
 * LastEditTime  2022-12-27 10:24:43
 * Description js入口文件
 */
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, useRoutes } from "react-router-dom";

import routes from "./config/router.config";

const App = () => <>{useRoutes(routes)}</>;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
