/**
 * 文章模型
 */
import mongoose from 'mongoose'
const ArticleSchema = mongoose.Schema({
    title: String, //标题
    type:String,
    content: Object, //文章内容
    // like:Number,//喜欢人数
    // isLower: { //是否下架
    //     type: Boolean,
    //     default: false
    // }
},{
  // collection: 'markdown'
  collection: 'article'
});

ArticleSchema.statics = {
    /* 查找 分页*/
    async findArt(data = {}, option = {}) {
        const result = await this.find(data).skip(option.skip).limit(option.limit);
        return result
    },
    /* 文章详情 按id */
    async getArtById(id) {
      const hid = mongoose.mongo.ObjectId(id);
      const result = await this.find({_id:hid});
      return result[0]
    },
    /* 按条件查找*/
    async findByConditions(data = {}, option = {}) {
      const result = await this.find(data,option);
      return result
    },
    // 查找最热文章
    async findHotsArticle() {
      const result = await this.find({type:"article"});
      let res = result.map((item,index)=>{
        return {title:item.title,id:item.id}
      })
      return res
    },
    // /* 创建 */
    // async createArt(data = {}) {
    //     const result = await this.create(data);
    //     return result;
    // },
    // /* 总条数 */
    async countNum(data = {}, option = {}) {
        const result = await this.countDocuments(data);
        return result;
    }
}

const ArticleModel = mongoose.model('article', ArticleSchema);
export default ArticleModel