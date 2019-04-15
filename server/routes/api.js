import ArticleController from '../controller/article'
import Router from 'koa-router'
const Api = new Router();
/**
 * 文章列表
 */
Api.post('/articlelist',  ArticleController.articlelist);
Api.post('/artById',  ArticleController.artById);
Api.post('/findByConditions',  ArticleController.findByConditions);
Api.post('/findByCate',  ArticleController.findByCate);
Api.post('/findHotsArticle',  ArticleController.findHotsArticle);
export default Api