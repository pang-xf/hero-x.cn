import mongoose from 'mongoose'
// import ArticleModel from './ArticleModel'
import config from '../config/config'

mongoose.connect(config.db.url ,{ useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('db success');
});
import ArticleModel from '../model/ArticleModel'
export default ArticleModel