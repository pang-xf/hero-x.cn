import Router from 'koa-router';
const fs = require('fs')
const router = new Router();
const mongoose = require('mongoose')

// 中间层，用来连接数据库
const Monk = require('monk')
const mongodb = Monk('localhost/herox') 
const markdown = mongodb.get('markdown')
// const main1 = async ctx => {
//   let data = await getMarkdown()
//   user.insert({
//     "markdown":data
//   })
// }
// main1()
// 必须异步操作，不然读不出来数据
const main = async ctx => {
  const data1 = await markdown.find()
  ctx.response.body = data1
}


const routers = router
  .get('/getArticle',main)
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