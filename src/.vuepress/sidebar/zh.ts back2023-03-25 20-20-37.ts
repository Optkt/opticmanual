import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    {
      icon: "discover",
      text: "参数类",
      prefix: "parameters/",
      children: "structure",
    },
    {
      icon: "discover",
      text: "分析属性类",
      prefix: "ansys/",
      children: "structure",
    },
    {
      icon: "discover",
      text: "专有计算类",
      prefix: "comput/",
      children: "structure",
    },
    {
      icon: "discover",
      text: "其他类",
      prefix: "others/",
      children: "structure",
    },
  ],
});
