/*
 * Author  rhys.zhao
 * Date  2022-08-24 17:47:41
 * LastEditors  rhys.zhao
 * LastEditTime  2022-11-08 15:35:16
 * Description 基本布局
 */
import React from "react";
import styles from "./index.module.scss";

import { Link, Outlet } from "react-router-dom";

const BasicLayout = () => {
  return (
    <div className={styles.basicLayout}>
      <div className={styles.nav}>
        <Link to='/'>Home</Link> | <Link to='articleList'>ArticleList</Link>
      </div>

      {/* Outlet相当于是子路由的占位符 */}
      <Outlet />
    </div>
  );
};
export default BasicLayout;
