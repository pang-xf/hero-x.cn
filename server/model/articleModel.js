"use strict"
/**
 * 文章模型
 */
import mongoose from 'mongoose'
const ArticleSchema = mongoose.Schema({
    title: String, //标题
    image: String, //图片地址
    description: String, //文章简介        
    time: { //创建时间
      type: Date,
      default: Date.now
    },
    content: String, //文章内容
    read: Number, //查看人数
    tag: String, //标签
    comments:[],//评论列表
    like:Number,//喜欢人数
    // isLower: { //是否下架
    //     type: Boolean,
    //     default: false
    // }
},{
  collection: 'markdown'
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