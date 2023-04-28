const path = require('path')
const fs = require('fs-extra')
const cp = require('child_process')

const result = cp.execSync('tsc --showConfig', { encoding: 'utf8' })
const tsConfig = JSON.parse(result)

const pkgJson = fs.readJSONSync(path.resolve('package.json'))

const outDir = path.resolve(tsConfig.compilerOptions.outDir)

delete pkgJson.devDependencies
delete pkgJson.scripts
fs.writeJSONSync(path.join(outDir, 'package.json'), pkgJson, { spaces: 2 })

const dbFileName = 'data.sqlite'
const sqliteSourcePath = path.join(__dirname, '../src/', dbFileName)
const sqliteDestPath = path.resolve('../dist/', dbFileName)
if (fs.pathExistsSync(sqliteSourcePath)) {
  fs.copyFileSync(sqliteSourcePath, sqliteDestPath)
}
