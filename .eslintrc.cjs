/*
 * Author  rhys.zhao
 * Date  2022-11-09 18:21:27
 * LastEditors  rhys.zhao
 * LastEditTime  2022-12-27 13:18:12
 * Description eslint配置
 */
module.exports = {
  // 特定项目下，不再检索上级目录
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
    amd: true
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    // eslint-config-prettier的缩写
    "prettier"
  ],
  plugins: ["react"],
  parser: "babel-eslint",
  // 解析器选项
  parserOptions: {
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: {
    react: {
      version: "detect"
    }
  },
  rules: {
    "no-unused-expressions": "off",
    "no-unused-vars": "warn",
    "no-console": "off",
    "no-debugger": "error",
    "no-unreachable": "warn",
    "react/prop-types": "warn"
  }
};
