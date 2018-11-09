<template>
  <div  class="global">
    <bheads/>
    <div class="about"></div>
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
    // let res  = await app.$axios.$get('/article/getArticleById/'+route.params.id)
    // return { data: res.data}
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
      if(scrollTop>170){
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
<style src='~/assets/css/about.less' lang="less"></style>