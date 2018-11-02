import Router from 'koa-router';
import article from './article';
const router = new Router();
router.use('/article', article.routes(), article.allowedMethods());
export default router;