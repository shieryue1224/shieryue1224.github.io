import { defineConfigWithTheme } from 'vitepress'
import mdItCustomAttrs from 'markdown-it-custom-attrs'
export interface ThemeConfig {
  //navBar
  menuList: { name: string; url: string }[]

  //banner
  videoBanner: boolean
  name: string
  welcomeText: string
  motto: string[]
  social: { icon: string; url: string }[]

  //spine
  spineVoiceLang: 'zh' | 'jp'

  //footer
  footerName: string
  poweredList: { name: string; url: string }[]

  //gitalk
  clientID: string
  clientSecret: string
  repo: string
  owner: string
  admin: string[]
}

export default defineConfigWithTheme<ThemeConfig>({
  lang: 'zh-CN',
  head: [
    ['link', { rel: 'shortcut icon', href: '/favicon.ico' }],
    // gitalk
    ['link', { rel: 'stylesheet', href: 'https://unpkg.com/gitalk/dist/gitalk.css' }],
    ['script', { src: 'https://unpkg.com/gitalk/dist/gitalk.min.js' }],
    // bluearchive font
    [
      'link',
      {
        rel: 'stylesheet',
        href: '/font/Blueaka/Blueaka.css',
      },
    ],
    [
      'link',
      {
        rel: 'stylesheet',
        href: '/font/Blueaka_Bold/Blueaka_Bold.css',
      },
    ],
    // 图片灯箱
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.css',
      },
    ],
    [
      'script',
      {
        src: 'https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.umd.js',
      },
    ],
  ],
  ignoreDeadLinks: true,
  // 生成站点地图
  sitemap: {
    hostname: 'https://luv.zphuang.top', //替换为你的域名
  },
  //站点标题配置
  title: "Dec's 部落格",
  description: "Dec's 部落格",
  themeConfig: {
    // navBar
    menuList: [
      { name: '首页', url: '' },
      { name: '标签', url: 'tags/' },
    ],

    //banner区配置
    videoBanner: false, //是否显示视频背景
    name: "Dec's 碎碎念", //首页标题
    welcomeText: 'Flowers For Lu', //首页欢迎语
    motto: ['和你的日常，就是奇迹', '你很远,也很近,在脑海,也在心里', '生活明朗,万物可爱'], //首页格言
    social: [ //社交连接配置
      { icon: 'github', url: 'https://github.com/' },
      { icon: 'bilibili', url: 'https://www.bilibili.com/' },
      { icon: 'qq', url: 'https://im.qq.com/index/' },
      { icon: 'wechat', url: 'https://weixin.qq.com/' },
    ],

    //spine语音配置，可选zh/jp
    spineVoiceLang: 'zh',

    //footer配置
    footerName: 'Dec',
    poweredList: [
      { name: 'VitePress', url: 'https://github.com/vuejs/vitepress' },
      { name: 'GitHub Pages', url: 'https://docs.github.com/zh/pages' },
    ],

    //gitalk配置
    //clientID: 'Ov23lifXIazaxDJL5EeX',
    //clientSecret: '0bb4853f6304780ee1536c9d602237f915310159',
    //repo: 'Dec1224.github.io', //存放评论数据的仓库,可以是任意的,就用本仓库就好
    //owner: 'Dec1224',
    //admin: ['Dec1224'],
    clientID: 'Ov23liRQcMcAi7lqi0h4',
    clientSecret: 'ea2251d2da317bdac2687c577b2d3435bed151b5',
    repo: 'Dec1224.github.io', //存放评论数据的仓库,可以是任意的,就用本仓库就好
    owner: 'Dec1224',
    admin: ['Dec1224'],
    title: '💬 评论', // GitHub issue title
    id: 'location.pathname', // Ensure uniqueness and length less than 50
    language: 'zh-CN',
    distractionFreeMode: false, //是否开启免打扰模式
  },
  markdown: {
    theme: 'solarized-dark',
    lineNumbers: true,
    math: true,
    config: (md) => {
      // use more markdown-it plugins!
      md.use(mdItCustomAttrs, 'image', {
        'data-fancybox': 'gallery',
      })
    },
  },
})
