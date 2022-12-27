/*
 * Author  rhys.zhao
 * Date  2022-08-24 17:42:32
 * LastEditors  rhys.zhao
 * LastEditTime  2022-12-27 13:37:25
 * Description Home页面
 */
import React from "react";
import styles from "./index.module.scss";

import Marquee from "@/components/Marquee";

const Home = () => {
  return (
    <div className={styles.home}>
      <Marquee>这里是首页</Marquee>
    </div>
  );
};

export default Home;
