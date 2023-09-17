import { DefaultTheme } from 'vitepress'

const nav: DefaultTheme.NavItem[] = [
  {
    text: '下拉选择框',
    items: [
      { text: 'options-1', link: '/' },
      { text: 'options-2', link: 'http://www.baidu.com' },
    ],
  },
]
export default nav