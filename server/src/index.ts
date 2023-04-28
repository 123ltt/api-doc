import path from 'node:path'
import { server } from '@hapi/hapi'
import Inert from '@hapi/inert'
import './db'
import { searchHandler } from './service/search'

async function bootstrap () {
  const srv = server({
    port: process.env.PORT || 3555,
    host: '0.0.0.0',
    state: {
      strictHeader: false
    },
    routes: {
      timeout: {
        server: 10000
      },
      files: {
        relativeTo: path.join(__dirname, 'public')
      }
    }
  })

  await srv.register(Inert)

  srv.route([
    {
      path: '/api/search',
      method: 'get',
      handler: searchHandler
    },
    {
      path: '/api/{any*}',
      method: ['get', 'post'],
      handler (request, h) {
        return `Not found. link: ${request.url}`
      }
    },
    {
      method: 'GET',
      path: '/{param*}',
      handler: {
        directory: {
          path: '.',
          redirectToSlash: true,
          index: true
        }
      }
    }
  ])

  await srv.start()
  console.info(`Server running at: ${srv.info.uri}`)
}

bootstrap()
