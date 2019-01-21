<template>
  <div  class="global">
    <div class='article-page'>
      <div class="content">
        <p class="article_title">{{data.title}}</p>
        <div class="article_intro">
          <span class="author">李宇童鞋丶</span>发布于 <time class="time">2019-01-02 12:22:22</time> / <span class="cate">前端</span> / <span class="comment">10</span>条评论 / <span class="hot">200</span>热度
        </div>
        <div class="content_wrap" v-html="markedContent(data.content)"></div>
      </div>
    </div>
  </div>
</template>
<script>
import marked from '~/plugins/marked'
export default {
  // layout: function(context){
  //   return 'articles'
  // },
  data () {
    return {
      data:'',
      isScroll:false,
    }
  },
  async asyncData ({app,route}) {
    let res  = await app.$axios.$get('/article/getArticleById/'+route.params.id);
    return { data: res.data}
  },
  methods: {
    markedContent(content) {
      return marked(content, null, true)
    },
    gotoArticle(){

    },
  },
  mounted () {
  }
}
</script>
<style src='~/assets/css/global.less' lang="less"></style>
<style src='~/assets/css/index.less' lang="less" scoped></style>
<style src='~/assets/css/article.less' lang="less"></style>