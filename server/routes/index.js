import Router from 'koa-router';
import user from './user';
const fs = require('fs')
const router = new Router();
// router.use('/user', user.routes(), user.allowedMethods());
try {
  router.get('/getUserMsg',async (ctx,next) => {
    let data = await getMarkdown()
    ctx.body = {
      data: data,
      status: 200
    };
  });
} catch (error) {
  console.log(error);
}
async function getMarkdown() { 
  return new Promise((resolve,reject)=>{
    fs.readFile('markdown/test.md','utf8', function(err, data) {
      if (err) throw err;
      resolve(data)
    });
  })
}
export default router;