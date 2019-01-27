"use strict";

// import {
//     ArticleModel
// } from '../mongoose/dbConnect'
import ArticleModel from "../mongoose/dbConnect";
/**
 * article Controller
 * Get List
 * Create Article
 * Set Article
 */
class ArticleController {
  constructor() {
    // 文章
    this.articlelist = this.articlelist.bind(this);
    this.artById = this.artById.bind(this);
    this.findByConditions = this.findByConditions.bind(this);
  }

  /**
   * 获取文章列表
   * @param {*} ctx
   * @param {*} next
   */
  async articlelist(ctx) {
    const body = ctx.request.body;
    try {
      if (body.skip != undefined && body.limit) {
        let option = {
          skip: Number(body.skip),
          limit: Number(body.limit)
        };
        let totalCount = await ArticleModel.countNum({});
        let data = await ArticleModel.findArt({}, option);
        ctx.body = {
          code: 0,
          totalCount: totalCount,
          data: data,
          desc: "成功"
        };
      } else {
        ctx.body = {
          code: 0,
          data: {},
          desc: "参数错误"
        };
      }
    } catch (err) {
      ctx.throw(err);
    }
  }
  /**
   * 获取文章详情
   */
  async artById(ctx) {
    const body = ctx.request.body;
    try {
      if (body.id != undefined) {
        let id = body.id;
        let data = await ArticleModel.getArtById(id);
        ctx.body = {
          code: 0,
          data: data,
          desc: "成功"
        };
      } else {
        ctx.body = {
          code: 0,
          data: {},
          desc: "未指定的文章id"
        };
      }
    } catch (err) {
      ctx.throw(err);
    }
  }
  /**
   * 按条件查找
   */
  async findByConditions(ctx) {
    const body = ctx.request.body;
    const condition = body.condition;
    let option = {}
    switch (condition) {
      case 'tag':
        option = {tag:1,_id:0,image:1}
        break;
      case 'hots':
        option = {title:1,_id:0}
        break;
      default:
        option = {}
        break;
    }
    let data = await ArticleModel.findByConditions({},option);
    ctx.body = {
      code: 0,
      data: data,
      desc: "成功"
    };
  }
}

export default new ArticleController();
