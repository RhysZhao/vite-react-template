/*
 * Author  rhys.zhao
 * Date  2022-11-09 18:21:27
 * LastEditors  rhys.zhao
 * LastEditTime  2023-02-06 10:55:22
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
  parser: "@babel/eslint-parser",
  // 解析器选项
  parserOptions: {
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    },
    babelOptions: {
      presets: ["@babel/preset-react"]
    },
    requireConfigFile: false
  },
  settings: {
    react: {
      version: "detect"
    }
  },
  rules: {
    "no-unused-expressions": "off",
    "no-unused-vars": "warn",
    "no-console": "warn",
    "no-debugger": "error",
    "no-unreachable": "warn",
    "react/prop-types": "warn"
  }
};
