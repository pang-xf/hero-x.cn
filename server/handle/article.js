const MongoClient = require('mongodb').MongoClient;
let mongoConnect = 'mongodb://47.106.163.14:27017/herox';
const ObjectID = require('mongodb').ObjectID;
const artHandle = {
  async handlegetPartOfArticle(){
    return new Promise((resolve,reject)=>{
      MongoClient.connect(mongoConnect,{useNewUrlParser: true },function(err, client) {
        let db = client.db('herox');
        db.collection('markdown').find().toArray(function(err, result) {
          let newArticleArr = {}
          if (err) {
            console.log('Error:' + err);
            reject(err)
            return;
          }
          // result.map(v=>{
          //   console.log(v);
          // })
          resolve(result)
          client.close();
        });
      });
    })
  },
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
  }
}
module.exports = artHandle