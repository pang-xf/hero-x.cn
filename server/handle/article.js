const MongoClient = require('mongodb').MongoClient;
// 自动创建数据库 runoob
let mongoConnect = 'mongodb://47.106.163.14:27017/herox';
const artHandle = {
  async handlegetPartOfArticle(){
    return new Promise((resolve,reject)=>{
      MongoClient.connect(mongoConnect,{useNewUrlParser: true },function(err, client) {
        console.log("连接成功！");
        let db = client.db('herox');
        db.collection('markdown').find().toArray(function(err, result) {
          if (err) {
            console.log('Error:' + err);
            reject(err)
            return;
          }
          // result.map(v=>{
          //     // 只返回20个文字
          //     v.markdown.content = v.markdown.content.slice(0,20);
          // })
          console.log(result);
          resolve(result)
          client.close();
        });
      });
    })
  }
}
module.exports = artHandle