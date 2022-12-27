/*
 * Author  rhys.zhao
 * Date  2022-08-24 17:56:37
 * LastEditors  rhys.zhao
 * LastEditTime  2022-12-27 10:39:52
 * Description 文章详情页面
 */
import React from "react";
import styles from "./index.module.scss";

import { useParams } from "react-router-dom";

import exampleImg from "@/assets/example.png";

const Detail = () => {
  const params = useParams();
  return (
    <div className={styles.detail}>
      <div>{`这里是文章${params.id}`}</div>
      <img src={exampleImg} alt='' />
    </div>
  );
};

export default Detail;
