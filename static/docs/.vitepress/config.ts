import path from 'node:path'
import { defineConfig } from 'vitepress'
import shiki from 'shiki'
import Unocss from 'unocss/vite'
import MenuData from './components/menu.json'

const navItems = MenuData.map(el => {
  return { text: el, link: `/${el}/`, activeMatch: `${el}` }
})

export default defineConfig({
  title: 'API文档',
  description: '泽汇IT部 API 文档',
  lastUpdated: true,
  themeConfig: {
    logo: '/logo.svg',
    nav: [
      {
        text: '子系统', items: navItems
      }
    ],
    sidebar: [{ text: '', items: [] }], // 需要设置空数据，不然组件不显示，导致插槽不生效
    // 上一篇、下一篇 功能失效，原因是 sidebar 默认给的是空数据
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    lastUpdatedText: '最后更新于',
    footer: {
      copyright: 'Copyright ©2023 By CaoHuiChang'
    }
  },
  head: [
    // <link rel="icon" type="image/svg+xml" href="/logo.svg">
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }]
  ],
  markdown: {
    defaultHighlightLang: 'json',
    async config (md) {
      const langs: shiki.Lang[] = ['json', 'js', 'javascript', 'xml']
      const highlighter = await shiki.getHighlighter({ theme: 'material-darker', langs })
      md.options.highlight = (str, lang, attrs) => {
        str = str.replace(/&([lg])t;/g, ($0, $1) => $1 === 'l' ? '<' : '>')
        lang = str.length > 3000
          ? 'text'
          : langs.includes(lang as shiki.Lang) ? lang : 'text'
        try {
          const s = JSON.stringify(JSON.parse(str), null, 2)
          return highlighter.codeToHtml(s, { lang: 'json' })
        } catch (err) {
          return highlighter.codeToHtml(str, { lang })
        }
      }
    },
    attrs: {
      leftDelimiter: '<%',
      rightDelimiter: '%>'
    }
  },
  outDir: path.resolve('../dist/public'),
  vite: {
    publicDir: path.resolve('docs/.vitepress/public'),
    plugins: [Unocss({
      theme: {
        colors: {
          primary: 'var(--vp-c-brand)',
          muted: 'var(--vp-c-text-2)'
        }
      }
    })],
    build: {
      emptyOutDir: true
    },
    server: {
      host: '0.0.0.0',
      proxy: {
        '/api/': {
          target: 'http://127.0.0.1:3555',
          changeOrigin: true
        }
      }
    }
  },
  ignoreDeadLinks: true
})
