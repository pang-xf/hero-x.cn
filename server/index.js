import Koa from 'koa'
import KoaStatic from 'koa-static'
import bodyParser from 'koa-bodyparser'
import Router from 'koa-router'
import route from './routes'
import cors from '@koa/cors'
import { Nuxt, Builder } from 'nuxt'
async function start () {
  const app = new Koa()
  const host = process.env.HOST || '127.0.0.1'
  const port = process.env.PORT || 3000
  app.use(cors())
  app.use(bodyParser())
  app.use(KoaStatic('.'))
  const router = new Router()
  router.use('', route.routes())
  app
  .use(router.routes())
  .use(router.allowedMethods())
  // Import and Set Nuxt.js options
  const config = require('../nuxt.config.js')
  config.dev = !(app.env === 'production')

  // Instantiate nuxt.js
  const nuxt = new Nuxt(config)

  // Build in development
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  app.use(async (ctx, next) => {
    // await next()
    ctx.status = 200
    // ctx.respond = false // Mark request as handled for Koa
    // ctx.req.ctx = ctx // This might be useful later on, e.g. in nuxtServerInit or with nuxt-stash
    // nuxt.render(ctx.req, ctx.res)
    return new Promise((resolve, reject) => {
      ctx.res.on('close', resolve)
      ctx.res.on('finish', resolve)
      nuxt.render(ctx.req, ctx.res, promise => {
        // nuxt.render passes a rejected promise into callback on error.
        promise.then(resolve).catch(reject)
      })
    })
  })

  app.listen(port, host)
  console.log('Server listening on ' + `http://${host}:${port}`)
}

start()