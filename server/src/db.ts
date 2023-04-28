import path from 'path'
import sqlite3 from 'sqlite3'
import { promisify } from 'node:util'

const dbPath = path.join(__dirname, 'data.sqlite')

function handler (err: Error | null) {
  if (err) return console.error(err)

  const tableName = 'doc'

  db.serialize(() => {
    db.run(`
    CREATE TABLE IF NOT EXISTS ${tableName} (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      systemName TEXT,
      path TEXT,
      content TEXT
    )
  `)

    db.run(`CREATE UNIQUE INDEX IF NOT EXISTS ${tableName}_uid ON ${tableName} (path);`)
  })

  console.info('DB connected.')
}

console.info('DB path:', dbPath)

const args = [dbPath, handler] as const

if (process.env.NODE_ENV === 'production') {
  (args as any).splice(1, 0, sqlite3.OPEN_READONLY)
}

export const db = new (sqlite3.verbose()).Database(...args)

export function dbRun (sql: string) {
  return promisify<string, void>(db.run.bind(db))(sql)
}

export function dbGet<T = unknown> (sql: string) {
  return promisify<string, T>(db.get.bind(db))(sql)
}

export function dbAll<T = unknown> (sql: string) {
  return promisify<string, T>(db.all.bind(db))(sql)
}
