import path from 'node:path'
import fd from 'fast-glob'
import fs from 'node:fs/promises'
import { promisify } from 'node:util'
import { dbRun, db } from './db'

const mdRootDir = path.resolve('../static/docs')

fd(['**/*.md'], {
  cwd: mdRootDir,
  ignore: ['.vitepress/**/*.md', 'public/**/*.md']
}).then(async entries => {
  await dbRun('DELETE FROM doc')
  for (const entry of entries) {
    const arr = entry.slice(0, -3).split('/')
    const content = await fs.readFile(path.join(mdRootDir, entry), 'utf8')
    const linkPath = '/' + arr.join('/')
    const sqlStr = 'INSERT INTO doc (path, systemName, content) VALUES (?, ?, ?)'
    await promisify<string, string[], void>(db.run.bind(db))(sqlStr, [linkPath, arr[0], content])
  }
  console.info('写入数据库完成')
})
