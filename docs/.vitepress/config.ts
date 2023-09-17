// import { defineConfig } from 'vitepress'
import themeConfig from './themeConfig'
module.exports = {
  base: '/ms_api/',
  title: 'ms_api',
  description: '自定义的description',
  locales: {
    '/': {
      lang: 'zh-CN',
      title: '自定义的title',
      description: '自定义的description',
      label: '',
      link: '',
    },
    '/en/': {
      lang: 'en-US',
      title: 'Custom title',
      description: 'Custom description',
      label: '',
      link: '',
    },
  },
  themeConfig,
  markdown: {
    theme: {
      light: 'vitesse-light',
      dark: 'vitesse-dark',
    },
    lineNumbers: true,
  },
};