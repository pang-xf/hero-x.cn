import Router from 'koa-router';
// import article from './article';
// import user from './user';
import api from './api';
const router = new Router();
// router.use('/article', article.routes(), article.allowedMethods());
// router.use('/user', user.routes(), user.allowedMethods());
router.use('/api', api.routes(), api.allowedMethods());
export default router;