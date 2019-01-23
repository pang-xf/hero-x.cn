import ArticleController from '../controller/article'
import Router from 'koa-router'
const Api = new Router();
/**
 * 文章列表
 */
Api.post('/articlelist',  ArticleController.articlelist);
export default Api