import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    {
      icon: "discover",
      text: "参数类",
      prefix: "parameters/",
      link: "parameters/",
      children: "structure",
    },    {
      icon: "discover",
      text: "分析属性类",
      prefix: "ansys/",
      link: "ansys/",
      children: "structure",
    },    {
      icon: "discover",
      text: "专有计算类",
      prefix: "comput/",
      link: "comput/",
      children: "structure",
    },    {
      icon: "discover",
      text: "其他类",
      prefix: "others/",
      link: "others/",
      children: "structure",
    },  ],
});
