import { hopeTheme } from "vuepress-theme-hope";
import { zhNavbar, enNavbar } from "./navbar/index.js";
import { zhSidebar, enSidebar } from "./sidebar/index.js";

export default hopeTheme({
  hostname: "https://www.optkt.com/hb",

  author: {
    name: "光学课堂",
    url: "https://www.optkt.com",
  },

  iconAssets: "iconfont",
  home:"/",
  logo: "/logo.svg",
  favicon: "/favicon.ico",
  repo: "Optkt/opticmanual",
  docsBranch: "master",
  docsDir: "src",

  locales: {
   /**
     * Chinese locale config
     */
    "/": {
      // navbar
      navbar: zhNavbar,

      // sidebar
      sidebar: zhSidebar,
      navbarLayout:{
        start:["Brand"],
        center:["Links"],
        end:["Outlook","Search"],
      },     
   
      footer: "成就10万光学人",
      contributors:true,
      editLink:true,
      displayFooter: true,

      // page meta
      metaLocales: {
        editLink: "在 Github 上编辑此页",
      },
    }, 
    "/en/": {
      // navbar
      navbar: enNavbar,

      // sidebar
      sidebar: enSidebar,

      footer: "Default footer",

      displayFooter: true,

      metaLocales: {
        editLink: "Edit this page on Github",
      },
    },

    
  },

  encrypt: {
    config: {
      "/en/demo/encrypt.html": ["1234"],
      "/demo/encrypt.html": ["1234"],
    },
  },

  plugins: {
    //comment: {
      // @ts-expect-error: You should generate and use your own comment service
     // provider: "Waline",
    //},

    // all features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true,
    },

    // uncomment these if you want a pwa
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cachePic: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  },
});