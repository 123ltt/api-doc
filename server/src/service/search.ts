import { promisify } from 'node:util'
import { defineHandler } from '../util'
import { db } from '../db'

type TDoc = {
  path: string;
  systemName: string;
  content: string;
}

export const searchHandler = defineHandler(async (request, h) => {
  const { s = '', n: systemName = '' } = request.query as { s: string, n: string }
  const keyword = s.trim().replace(/(?<!\\)([%_])/g, '\\$1').replace(/[\s]+/g, ' ').toLowerCase()

  if (keyword.length < 3) {
    return h.response({ status: true, data: [] })
  }

  try {
    const SQL = 'SELECT * FROM doc WHERE systemName = ? AND content LIKE ? ESCAPE \'\\\' COLLATE NOCASE'
    const result = await promisify<string, string[], TDoc[]>(db.all.bind(db))(SQL, [systemName, `%${keyword}%`])
    const maxLen = 100
    const data = result.map(item => {
      let content = ''
      if (keyword.length > maxLen) {
        content = keyword
      } else {
        const i = item.content.toLowerCase().indexOf(keyword)
        const offset = Math.ceil((maxLen - keyword.length) / 2)
        content = item.content.slice(i - offset, i + offset + keyword.length)
      }
      return { path: item.path, content }
    })

    return h.response({ status: true, data })
  } catch (err: any) {
    console.error(err)
    return h.response(err.message).code(500)
  }
})
