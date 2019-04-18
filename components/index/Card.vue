<template>
  <div class='article_cards'>
    <article v-if="article.type=='article'">
      <div class="article_card1 hoverTitle" v-if="!article.content.isSecret">
        <h2 class="title" :title="article.title">
          <span @click="goDetail(id)">{{article.title}}</span>
        </h2>
        <div class="ac_wrap">
          <div class="art-left" v-if="article.content.image">
            <img :src="article.content.image" alt="">
          </div>
          <div class="art-right">
            <p class="abstrack" :title="article.content.description" @click="goDetail(id)">{{article.content.description}}花在女人身上的钱不能省，就算省了也不能让她知道。花在女人身上的钱不能省，就算省了也不能让她知道。花在女人身上的钱不能省，就算省了也不能让她知道。花在女人身上的钱不能省，就算省了也不能让她知道。花在女人身上的钱不能省，就算省了也不能让她知道。花在女人身上的钱不能省，就算省了也不能让她知道。</p>
          </div>
        </div>
        <div class="meta">
          <span class="read">
            <button class="normal">
              <span class="triangle_border_up"></span>
              朕已阅 8k
            </button>
          </span>
          <span class="comments mi"><i class="iconfont">&#xe604;</i>{{article.content.comments.length}}条评论</span>
          <span class="share mi"><i class="iconfont">&#xe705;</i>分享</span>
          <span class="tag mi"><i class="iconfont">&#xe625;</i>{{article.content.tag}}</span>
          <span class="time mi"><i class="iconfont">&#xe681;</i>{{article.content.time}}</span>
        </div>
      </div>
      <div class="secret_wrap article_card1" v-else>
        <h2 class="title" :title="article.title">
          <span>
            该内容已被锁定，请输入密码查看
          </span>
        </h2>
        <div class="secret_content">
          <form>
            <input type="password" size="25" placeholder="请输入密码" class="s_input" name="post_password">
            <div class="s_button">Continue</div>
          </form>
        </div>
      </div>
    </article>
    <article v-if="article.type=='image'">
      <div class="a_image article_card1">
        <h2 class="title" :title="article.title">
          <span @click="goDetail(id)">{{article.title}}</span>
        </h2>
        <img :src="article.content.image" alt="" preview="1">
        <div class="meta">
          <span class="read">
            <button class="normal">
              <span class="triangle_border_up"></span>
              好看 8k
            </button>
          </span>
          <span class="comments mi"><i class="iconfont">&#xe604;</i>{{article.content.comments.length}}条评论</span>
          <span class="share mi"><i class="iconfont">&#xe705;</i>分享</span>
          <span class="time mi"><i class="iconfont">&#xe681;</i>{{article.content.time}}</span>
          <!-- <span class="read" v-if="article.read>0"><i class="iconfont icon-yanjing-kejian"></i>{{article.read}}</span> -->
        </div>
      </div>
    </article>
    <article v-if="article.type=='video1'">
    </article>
    <article v-if="article.type=='cof'">
      <div class="a_cof article_card1">
        <div class="cof_image_wrap">
          <div class="cof_modal"></div>
          <img :src=article.content.cof_image alt="" class="cof_image">
        </div>
        <div class="cof_text">{{article.content.cof_text}}</div>
        <div class="meta">
          <span class="comments mi"><i class="iconfont">&#xe604;</i><span v-if="article.content.comments.length>0">{{article.content.comments}}</span>reply</span>
          <span class="time mi"><i class="iconfont">&#xe681;</i>{{article.content.time}}</span>
          <span class="time address"><i class="iconfont">&#xe668;</i>In:{{article.content.address}}</span>
        </div>
      </div>
    </article>
  </div>
</template>
<script>
export default {
  data () {
    return {
      articles:[
        {
          image:'https://ws4.sinaimg.cn/large/006tNbRwgy1fwditqwz5kj30b40b4glp.jpg',
          title:'标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题',
          content:'描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述',
          tag:'web',
          time:'2018-10-10',
          read:'20',
          comments:'20',
          like:'20',
        }
      ]
    }
  },
  props: ['article','id'],
  components: {
  },
  methods: {
    goDetail(pid){
      this.$router.push({path:'/article/'+pid})
    }
  },
  created () {
    // 处理数据
  },
  mounted () {
    console.log(this.article);
  }
}
</script>

<style src='~/assets/icon/iconfont.css' scoped></style>
<style src='~/assets/css/article.less' lang="less" scoped></style>