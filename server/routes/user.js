import Router from 'koa-router';
const router = new Router();
// 中间层，用来连接数据库
// const db = require('monk')('localhost/herox') 
// const markdown = db.get('markdown')
let userInfo = {
    name:'李宇童鞋丶',
    sex:'man',
    desc:'间歇性踌躇满志，持续性混吃等死。',
    avatar:'https://ws1.sinaimg.cn/large/006tNbRwgy1fyhwhz6lwsj30b40b4aa7.jpg',
    school:'Pan Zhi Hua University',
    professional:'Mathematics and computers',
    schoolTime:'2014年-2018年',
    job:'web development',
    address:'Shen Zhen',
    homeTown:'Si Chuan Za Zhong',
    email:'me0809@yeah.net',
    github:'https://github.com/hero-x',
    zhihu:'https://www.zhihu.com/people/xiang-ge-95-60/activities',
    juejin:'https://juejin.im/user/59561da16fb9a06ba646355d',
    workExe:[
        {
            name:'深圳市小行家科技有限公司',
            startTime:'2018.3',
            endTime:'至今'
        }
    ],
    project:[
        {
            name:'青年驿站',
            startTime:'2018.6',
            endTime:'2018.11',
            content:'青年驿站是什么..',
            dowhat:'负责整个小程序的开发',
            technology:'wepy'
        }
    ]
}
const getUserInfo = async ctx => {
    ctx.response.body = {
      data: userInfo,
      status: 200
    };
  }

const routers = router
    .get('/getUserInfo',getUserInfo)


export default routers