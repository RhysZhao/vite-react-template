/*
 * Author  rhys.zhao
 * Date  2022-12-27 10:46:34
 * LastEditors  rhys.zhao
 * LastEditTime  2022-12-27 10:57:47
 * Description 跑马灯组件
 */
import React from "react";
import PropTypes from "prop-types";
import styles from "./index.module.scss";

const Marquee = ({ className, style, children }) => {
  return (
    <div className={`${styles.wrapper} ${className}`} style={style}>
      <div className={styles.inner}>{children}</div>
    </div>
  );
};
Marquee.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node
};
Marquee.defaultProps = {
  className: "",
  style: {},
  children: null
};

export default Marquee;
