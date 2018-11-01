import Koa from 'koa'
import KoaStatic from 'koa-static'
import bodyParser from 'koa-bodyparser'
import Router from 'koa-router'
import route from './routes'
import cors from '@koa/cors'
import { Nuxt, Builder } from 'nuxt'
async function start () {
  const app = new Koa()
  console.log('--------process.env.HOST-------');
  console.log(process.env);
  // const host = process.env.NODE_ENV=='production'? 'http://47.106.163.14': '127.0.0.1'
  // const port = process.env.NODE_ENV=='production'? 3002 : 3000
  const host ='127.0.0.1'
  const port =3000
  app.on('error', function(err,ctx){
    console.log('-------统一错误打印-------');
    console.log(err);
  }); 
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

  app.use(async (ctx,next) => {
    await next()
    ctx.status = 200 // koa defaults to 404 when it sees that status is unset
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