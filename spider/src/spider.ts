import fs from 'fs-extra'
import path from 'node:path'
import { getMenu, type TMenuItem } from './getMenu'
import { getContent, type TContent } from './getContent'
import { staticRoot, sidebarDir } from './config'

fs.emptyDirSync(sidebarDir)

export async function spider (systemId: number) {
  const arr = await getMenu(systemId)
  if (arr.length > 0) {
    await updateConfigSidebar(arr)

    for (const item of arr) {
      const result = await getContent(item.pageId)
      await saveFile(result, item.parentsTitle)
    }
    await saveIndexFile(arr[0])
  }
}

async function saveFile (data: TContent, parentsTitle: string[]) {
  const dir = path.join(staticRoot, ...parentsTitle)
  const filepath = path.join(dir, formatterFileName(data.page_title) + '.md')
  await fs.ensureDir(dir)

  let content = data.page_content.replaceAll('欢迎使用ShowDoc！', '').trim()
  content = `# ${data.page_title}\n\n> 作者：${data.author_username}\n\n` +
    content
      .replace(/<([^\s>]+)/g, ($0, $1) => {
        const include = ['span', 'br'].some(el => {
          const s = $1.toLowerCase()
          return el === s || '/' + el === s
        })
        return include ? $0 : `&lt;${$1.replace(/</g, '&lt;')}`
      })
      .replaceAll('&quot;', '"')
      .replace(/^#{2,}/gm, '##')

  await fs.writeFile(filepath, content, 'utf8')
}

async function saveIndexFile (data: TMenuItem) {
  const systemName = data.parentsTitle[0]
  await fs.writeFile(path.join(staticRoot, systemName, 'index.md'), `# ${systemName}`, 'utf8')
}

async function updateConfigSidebar (menus: TMenuItem[]) {
  for (const [key, value] of Object.entries(toTree(menus))) {
    const filename = key.replace(/^\/|\/$/g, '') + '.json'
    await fs.writeJson(path.join(sidebarDir, filename), value, { spaces: 2 })
  }
}

type TItem = {
  id?: string;
  text: string;
  parent?: string | null;
  link?: string;
  collapsible?: boolean;
  collapsed?: boolean;
  items?: TItem[]
}

function toTree (data: TMenuItem[]) {
  const sep = ',,'
  const arr: TItem[] = []
  const mapped = new Map<string, TItem>()

  data.forEach(item => {
    item.parentsTitle.forEach((el, index) => {
      const id = item.parentsTitle.slice(0, index + 1).join(sep)
      if (!arr.some(ele => ele.id === id)) {
        const itemData = {
          id,
          text: el,
          parent: index === 0 ? null : item.parentsTitle.slice(0, index).join(sep),
          collapsible: true,
          collapsed: false,
          items: []
        }
        mapped.set(id, itemData)
        arr.push(itemData)
      }
    })

    const parentId = item.parentsTitle.join(sep)
    mapped.get(parentId)?.items?.push({
      text: formatterFileName(item.title),
      link: '/' + item.parentsTitle.concat(item.title).join('/')
    })
  })

  arr.forEach(item => {
    if (item.parent) {
      mapped.get(item.parent)?.items?.push(item)
    }
  })

  Array.from(mapped.values()).forEach(item => {
    delete item.id
    delete item.parent
  })

  const systemName = data[0].parentsTitle[0]
  const items = mapped.get(systemName)!.items!
  // 第一层的每个元素必须要包含 items
  items.forEach(item => {
    if (!Array.isArray(item.items)) {
      item.items = [{ ...item }]
      item.collapsible = true
      item.collapsed = true
      delete item.link
    }
  })
  return { [`/${systemName}/`]: items }
}

function formatterFileName (name: string) {
  return name.replace(/[/\\]+/g, ' - ')
}
