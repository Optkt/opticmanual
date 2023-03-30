import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    "introduction",
    {
      icon: "discover",
      text: "案例",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
    },
    {
      text: "文档",
      icon: "note",
      prefix: "guide/",
      children: "structure",
    },
    {
      icon: "discover",
      text: "参数",
      prefix: "parameters/",
      children: "structure",
    },
    {
      text: "分i水泥杆",
      icon: "note",
      prefix: "ansproperty/",
      children: "structure",
    },
  ],
});
