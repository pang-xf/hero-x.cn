import Router from 'koa-router';
import user from './user';

const router = new Router();

// router.use('/user', user.routes(), user.allowedMethods());
router.get('/getUserMsg',async (ctx) => {
  console.log(ctx);
  console.log('----', ctx.ip)
  ctx.body = {
    data: '李宇',
    message: 200
  };
});
export default router;