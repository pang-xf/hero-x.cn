const MongoClient = require('mongodb').MongoClient;
let mongoConnect = 'mongodb://47.106.163.14:27017/herox';
const ObjectID = require('mongodb').ObjectID;
const artHandle = {
  async handlegetAllArticle(){
    return new Promise((resolve,reject)=>{
      MongoClient.connect(mongoConnect,{useNewUrlParser: true },function(err, client) {
        let db = client.db('herox');
        db.collection('markdown').find().toArray(function(err, result) {
          if (err) {
            console.log('Error:' + err);
            reject(err)
            return;
          }
          resolve(result)
          client.close();
        });
      });
    })
  },
  /**
   * @param  {} limit 返回查询条数  默认不传为10条数据
   */
  async handlegetPartOfArticle(limit = 4){
    return new Promise((resolve,reject)=>{
      MongoClient.connect(mongoConnect,{useNewUrlParser: true },function(err, client) {
        let db = client.db('herox');
        db.collection('markdown').find().limit(limit).toArray(function(err, result) {
          if (err) {
            console.log('Error:' + err);
            reject(err)
            return;
          }
          resolve(result)
          client.close();
        });
      });
    })
  },
  /**
   * @param  {} pid 文章的id
   */
  async handleGetArticleById(pid){
    return new Promise((resolve,reject)=>{
      MongoClient.connect(mongoConnect,{useNewUrlParser: true },function(err, client) {
        let db = client.db('herox');
        db.collection('markdown').find({_id:ObjectID(pid)}).toArray(function(err, result) {
          if (err) {
            console.log('Error:' + err);
            reject(err)
            return;
          }
          resolve(result[0])
          client.close();
        });
      });
    })
  },
  async handleGetArticleByTag(tag){
    return new Promise((resolve,reject)=>{
      MongoClient.connect(mongoConnect,{useNewUrlParser: true },function(err, client) {
        let db = client.db('herox');
        db.collection('markdown').find({tag: tag}).toArray(function(err, result) {
          if (err) {
            console.log('Error:' + err);
            reject(err)
            return;
          }
          resolve(result)
          client.close();
        });
      });
    })
  }
}
module.exports = artHandle