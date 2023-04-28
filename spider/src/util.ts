import fs from 'node:fs/promises'

async function getStat (path: string) {
  try {
    const stat = await fs.stat(path)
    return stat
  } catch (err) {}
  return null
}

export async function isDirectory (path: string) {
  const stat = await getStat(path)
  return stat ? stat.isDirectory() : false
}

export async function isFile (path: string) {
  const stat = await getStat(path)
  return stat ? stat.isFile() : false
}
