"use strict"

import {
    ArticleModel
} from '../monoose/dbConnect'
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
    }

    /**
     * 获取文章列表
     * @param {*} ctx 
     * @param {*} next 
     */
    async articlelist(ctx) {
        const body = ctx.request.body
        try {
            if (body.skip != undefined && body.limit) {
                let option = {
                    skip: Number(body.skip),
                    limit: Number(body.limit)
                };
                let totalPage = await ArticleModel.countNum({});
                let data = await ArticleModel.findArt({}, option);
                ctx.body = {
                    code: 0,
                    totalPage: totalPage,
                    data: data,
                    desc: '成功'
                }
            } else {
                ctx.body = {
                    code: 0,
                    data: {},
                    desc: '参数错误'
                }
            }
        } catch (err) {
            ctx.throw(err);
        }
    }
}

export default new ArticleController()