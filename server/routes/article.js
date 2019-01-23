import Router from 'koa-router';
const fs = require('fs')
const router = new Router();
import arthandle from '../handle/article'

async function getMarkdown() { 
  return new Promise((resolve,reject)=>{
    fs.readFile('markdown/test.md','utf8', function(err, data) {
      if (err) throw err;
      resolve(data)
    });
  })
}
const getAllArticle = async ctx =>{
  let data = await arthandle.handlegetAllArticle();
  ctx.response.body = {
    data: data,
    status: 200
  };
}
const getPartOfArticle = async ctx =>{
  let res = await arthandle.handlegetPartOfArticle(ctx.query.limit?ctx.query.limit:5);
  ctx.response.body = {
    data: res?res:[],
    status: 200
  };
}
const getArticleByTag = async ctx =>{
  let res = await arthandle.handleGetArticleByTag(ctx.query.tag);
  ctx.response.body = {
    data: res?res:[],
    status: 200
  };
}
const getArticleById = async ctx =>{
  let data = await arthandle.handleGetArticleById(ctx.params.pid);
  ctx.response.body = {
    data: data,
    status: 200
  };
}
const getTagsAndHotArticles = async ctx =>{
  let data = await arthandle.handleGetTagsAndHotArticles();
  ctx.response.body = {
    data: data,
    status: 200
  };
}
const routers = router
  .get('/getAllArticle',getAllArticle)
  .get('/getTagsAndHotArticles',getTagsAndHotArticles)
  .get('/getPartOfArticle',getPartOfArticle)
  .get('/getArticleByTag',getArticleByTag)
  .get('/getArticleById/:pid',getArticleById)
    // .get('/getArticle',getArticle)
    // .get('/getUserMsg',async (ctx,next) => {
    //     let data = await getMarkdown()
    //     ctx.body = {
    //     data: data,
    //     status: 200
    //     };
    // });
export default routers