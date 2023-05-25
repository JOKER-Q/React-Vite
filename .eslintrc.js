/*
 * @Descripttion:
 * @version:
 * @Author: Bailinxiang
 * @Date: 2023-05-24 16:07:46
 * @LastEditors: sueRimn
 * @LastEditTime: 2023-05-25 16:22:50
 */
module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "eslint:recommended",
    "prettier",
  ],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: ["react-refresh", "prettier"],
  //   rules: {
  //     "规则名": [规则值, 规则配置]
  // }
  // 规则值:
  // "off"或者0     //关闭检测规则
  // "warn"或者1    //打开并把打开的检测规则作为警告（不影响退出代码）
  // "error"或者2   //打开并把检测规则作为一个错误（退出代码触发时为1）
  rules: {
    "prettier/prettier": "error",
    "react-refresh/only-export-components": "warn",
    "no-debugger": 0, //禁止使用debugger(0-关闭)
    "no-unused-vars": 1, //不能有声明后未被使用的变量或参数(1-warn)
  },
};
