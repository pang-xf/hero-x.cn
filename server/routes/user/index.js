const router = require('koa-router')();
router.get('/getUserMsg',(ctx, next) => {
  console.log(ctx);
  console.log('----', ctx.ip)
  // ctx.body = JSON.stringify({"status": 200, "res": "success","data":{
  //   'key':'liyu'
  // }})
  ctx.body = {
    data: '李宇',
    message: 200
  };
  return next()
});
export default router;