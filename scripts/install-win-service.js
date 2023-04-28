const Service = require('node-windows').Service
const path = require('node:path')

const serviceName = 'api-doc'

// Create a new service object
const svc = new Service({
  name: serviceName,
  description: 'API文档',
  script: path.resolve('dist/index.js'),
  env: [
    { name: 'PORT', value: 3550 },
    { name: 'NODE_ENV', value: 'production' }
  ]
})

// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on('install', function () {
  console.log('Install complete.')
  svc.start()
})

svc.on('uninstall', () => {
  console.log('Uninstall complete.')
  console.log('The service exists: ', svc.exists)
})

svc.on('alreadyinstalled', () => {
  console.log(`${serviceName} 服务已存在`)
})

if (process.argv.includes('-un')) {
  svc.uninstall()
} else {
  svc.install()
}
