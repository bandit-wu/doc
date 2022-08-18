const { description } = require('../../package')

module.exports = {
  title: 'Bandit',
  description: description,
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],
  themeConfig: {
    repo: '',
    editLinks: true,
    docsDir: '',
    editLinkText: '',
    lastUpdated: true,
    nav: [
      {
        text: '基础学习',
        items: [
          {
            text: '前端', items: [
              { text: 'html', link: '/基础学习/html/' },
              { text: 'css', link: '/基础学习/css/' },
              { text: 'js', link: '/基础学习/js/' },
            ]
          },
          {
            text: '后端', items: [
              { text: 'php', link: '/基础学习/php/' },
              { text: 'java', link: '/基础学习/java/' }
            ]
          }
        ]
      },
      {
        text: '工具软件',
        ariaLabel: 'tool Menu',
        items: [
          { text: 'pnpm', link: '/工具软件/pnpm/' },
          { text: 'yarn', link: '/工具软件/yarn/' },
          { text: 'git', link: '/工具软件/git/' },
          { text: '命令行常用命令', link: '/工具软件/命令行常用命令/' },
        ]
      },
      {
        text: '框架文档',
        items: [
          {
            text: '前端', items: [
              { text: 'vue', link: '/框架文档/vue/' },
            ]
          },
          {
            text: '后端', items: [
              { text: 'koa2', link: '/框架文档/koa2/' },
            ]
          }
        ]
      },
      {
        text: '编程学习',
        ariaLabel: 'programming Menu',
        items: [
          { text: 'C语言', link: '/编程学习/C语言/' }
        ]
      },
      {
        text: 'GitHub',
        link: 'https://github.com/bandit-wu'
      }
    ],
    // sidebar: {
    //   '/基础学习/': [
    //     '',
    //     '前端'
    //   ]
    // }
  },

  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
