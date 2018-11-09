<template>
  <div  class="global">
    <bheads :showBanner='false' :isScroll.sync = 'isScroll'/>
    <div class='article-page'>
      <div class="ap-left">
        <div class="ap-left-item" v-if="!isScroll">
          <div class="ap-left-item-title">About The Article</div>
          <div class="ap-left-item-body">
            <div class="ap-item-body-user">
              <i class="icon icon-user"></i>
              <span>作者：HEROX</span>
            </div>
            <div class="ap-item-body-user">
              <i class="icon icon-dz"></i>
              <span>获得赞数：{{data.markdown.like}}</span>
            </div>
            <div class="ap-item-body-user">
              <i class="icon icon-yd"></i>
              <span>获得阅读数：{{data.markdown.read}}</span>
            </div>
          </div>
        </div>
        <div class="ap-left-item" v-if="!isScroll">
          <div class="ap-left-item-title">Recrecently Articles</div>
          <div class="ap-left-item-body">
            <div class="ap-left-item-body-wrap" @click="gotoArticle">
              <div class="left-item-body-left"></div>
              <div class="left-item-body-right">
                <p>理解 Javascript 执行上下文和执行栈理解 Javascript 执行上下文和执行栈</p>
                <div class="left-item-body-right-bottom">
                  <span class="readCount">1200人已读</span>
                  <span class="read">阅读</span>
                </div>
              </div>
            </div>
            <div class="ap-left-item-body-wrap">
              <div class="left-item-body-left"></div>
              <div class="left-item-body-right">
                <p>理解 Javascript 执行上下文和执行栈理解 Javascript 执行上下文和执行栈</p>
                <div class="left-item-body-right-bottom">
                  <span class="readCount">1200人已读</span>
                  <span class="read">阅读</span>
                </div>
              </div>
            </div>
            <div class="ap-left-item-body-wrap">
              <div class="left-item-body-left"></div>
              <div class="left-item-body-right">
                <p>理解 Javascript 执行上下文和执行栈理解 Javascript 执行上下文和执行栈</p>
                <div class="left-item-body-right-bottom">
                  <span class="readCount">1200人已读</span>
                  <span class="read">阅读</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="ap-left-item fixed" v-if="isScroll">
          <div class="ap-left-item-title">About The Article</div>
          <div class="ap-left-item-body">
            <div class="ap-item-body-user">
              <i class="icon icon-user"></i>
              <span>作者:HEROX</span>
            </div>
            <div class="ap-item-body-user">
              <i class="icon icon-dz"></i>
              <span>获得赞数:999</span>
            </div>
            <div class="ap-item-body-user">
              <i class="icon icon-yd"></i>
              <span>获得阅读数:999</span>
            </div>
          </div>
        </div>
      </div>
      <div class="content" v-html="markedContent(data.markdown.content)"></div>
    </div>
    <bfooter/>
  </div>
</template>
<script>
import marked from '~/plugins/marked'
import bheads from '~/components/bhead'
import bfooter from '~/components/bfooter'
export default {
  data () {
    return {
      data:'',
      isScroll:false,
    }
  },
  async asyncData ({app,route}) {
    let res  = await app.$axios.$get('/article/getArticleById/'+route.params.id)
    return { data: res.data}
  },
  components: {
    bfooter,bheads
  },
  methods: {
    markedContent(content) {
      return marked(content, null, true)
    },
    gotoArticle(){

    },
    handleScroll(){
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop,_self = this
      if(scrollTop>400){
          _self.isScroll = true
      }else{
          _self.isScroll = false
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  }
}
</script>
<style src='~/assets/css/global.less' lang="less"></style>
<style src='~/assets/css/index.less' lang="less" scoped></style>
<style src='~/assets/css/article.less' lang="less"></style>