import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    {
      icon: "discover",
      text: "参数类",
      prefix: "parameters/",
      collapsible: "true",
      children: "structure",
    },
    {
      icon: "discover",
      text: "分析属性类",
      prefix: "ansys/",
      collapsible: "true",
      children: "structure",
    },
    {
      icon: "discover",
      text: "专有计算类",
      prefix: "comput/",
      collapsible: "true",
      children: "structure",
    },
    {
      icon: "discover",
      text: "其他类",
      prefix: "others/",
      collapsible: "true",
      children: "structure",
    },
  ],
});
