import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "gaga's blog",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '鸭棚子', link: '/' },
      { text: '八股', items:[
        {text:'HTML', link:'/markdown-examples'},
        {text:'CSS', link:'/markdown-examples'},
        {text:'JavaScript', link:'/markdown-examples'},
        {text:'Vue3', link:'/markdown-examples'},
        {text:'React', link:'/markdown-examples'}
      ] },
      { text: '算法', link: '/markdown-examples' },
      { text: '面经', link: '/markdown-examples' },
      { text: '我有健忘症', link: '/markdown-examples' },
      { text: '不是东西', items:[
        {text:'胡言乱语', link:'/markdown-examples'},
        {text:'人生是旷野', link:'/markdown-examples'}
      ] }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
