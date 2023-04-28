const cp = require('node:child_process')
const path = require('path')

function shell (cmd, env = {}, cwd) {
  return new Promise((resolve, reject) => {
    const ls = cp.spawn(cmd, {
      shell: true,
      encoding: 'utf8',
      env,
      cwd
    })

    ls.stdout.on('data', data => console.log(String(data)))

    ls.stderr.on('data', data => console.error(String(data)))

    ls.on('close', () => resolve())

    ls.on('error', (err) => {
      reject(err)
    })
  })
}

shell('pnpm --filter static run docs:build', {
  ...process.env,
  NODE_OPTIONS: '--max-old-space-size=6000' // 这里是关键，不然打包构建的时候会提示内存不足
}).then(() => {
  // 安装依赖
  shell('npm install', process.env, path.resolve('dist'))
})
