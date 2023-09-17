import { DefaultTheme } from 'vitepress'
import nav from './nav'
import sidebar from './sidebar'

const themeConfig:DefaultTheme.Config = {
  logo: '/vite.svg',
  docFooter: { prev: '上一篇', next: '下一篇' },
  search: {
    provider: 'local',
  },
  editLink: {
    pattern: 'https://github.com/MissSage/ms_movie/edit/master/docs/:path',
    text: '在Github上编辑此页',
  },
  socialLinks: [{ icon: 'github', link: 'https://github.com' }],

  footer: {
    message: 'Released under the MIT Lisense.',
    copyright: 'Copyright © 2023 MissSage',
  },
  sidebar,
  nav,
}
export default themeConfig