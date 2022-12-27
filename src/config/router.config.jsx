/*
 * Author  rhys.zhao
 * Date  2022-08-24 21:27:49
 * LastEditors  rhys.zhao
 * LastEditTime  2022-12-27 10:20:01
 * Description 路由配置
 */
import React, { Suspense, lazy } from "react";
import BasicLayout from "@/layout/BasicLayout";

const lazyLoad = (src) => <Suspense fallback={<>...</>}>{React.createElement(lazy(src))}</Suspense>;

const routes = [
  {
    path: "/",
    element: <BasicLayout />, // BasicLayout是基本布局，不必使用懒加载
    children: [
      {
        index: true,
        element: lazyLoad(() => import("../pages/Home"))
      },
      {
        path: "articleList",
        element: lazyLoad(() => import("../pages/ArticleList"))
      },
      {
        path: "articleList/:id",
        element: lazyLoad(() => import("../pages/Detail"))
      },
      {
        path: "*",
        element: lazyLoad(() => import("../pages/NotFound"))
      }
    ]
  }
];

export default routes;
