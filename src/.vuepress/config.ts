import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/hb/",

  locales: {
       "/": {
      lang: "zh-CN",
      title: "光学手册 - 光学课堂",
      description: "光学课堂是光学设计行业交流学习平台，拥有ChatGPT接入的社区论坛，视频课程，行业文库，光学手册，供应商模块等，是您学习交流的首先平台。",
    },
   // "/en/": {
   //   lang: "en-US",
   //   title: "Docs Demo",
   //   description: "A docs demo for vuepress-theme-hope",
   // },
   
  },

  theme,
  
  // Enable it with pwa
  // shouldPrefetch: false,
});
