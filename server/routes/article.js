import Router from 'koa-router';
const fs = require('fs')
const router = new Router();
// 中间层，用来连接数据库
const db = require('monk')('localhost/herox') 
const markdown = db.get('markdown')
// 必须异步操作，不然读不出来数据
const getArticle = async ctx => {
  const resMarkDown = await markdown.find();
  ctx.response.body = {
    data: resMarkDown,
    status: 200
  };
}
//获取部分数据 首页 的 
const getPartOfArticle = async ctx => {
    let handleData = await markdown.find();
    handleData.map(v=>{
        // 只返回20个文字
        v.markdown.content = v.markdown.content.slice(0,20);
    })
    ctx.response.body = {
      data: handleData,
      status: 200
    };
  }
const getArticleById = async ctx => {
  const articles = await markdown.find({_id:ctx.params.pid})
  ctx.response.body = {
    data: articles[0],
    status: 200
  };
}

const routers = router
    .get('/getArticle',getArticle)
    .get('/getPartOfArticle',getPartOfArticle)
    .get('/getArticleById/:pid',getArticleById)
    .get('/getUserMsg',async (ctx,next) => {
        let data = await getMarkdown()
        ctx.body = {
        data: data,
        status: 200
        };
    });
async function getMarkdown() { 
  return new Promise((resolve,reject)=>{
    fs.readFile('markdown/test.md','utf8', function(err, data) {
      if (err) throw err;
      resolve(data)
    });
  })
}
export default routers