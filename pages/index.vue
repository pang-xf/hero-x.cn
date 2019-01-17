<template>
  <div class="global">
    <section class="container">
      <div class="left-content">
        <about/>
        <music/>
        <sentence/>
        <hotArticle/>
        <!-- <friends/> -->
        <tags/>
      </div>
      <div class="right-content">
        <ad/>
        <!-- <swiper/> -->
        <barticle v-for="(item,index) in article" :key="index" :article='item' :id="item._id"></barticle>
        <!-- <p style="margin: 20px auto;text-align:center">这里应该有个分页器</p> -->
      </div>
    </section>
    <bfooter/>
  </div>
</template>

<script>
import barticle from '~/components/index/barticle'
import swiper from '~/components/index/swiper'
import about from '~/components/index/about'
import hotArticle from '~/components/index/hotArticle'
import tags from '~/components/tags'
import music from '~/components/music'
import sentence from '~/components/sentence'
import friends from '~/components/index/friends'
import ad from '~/components/ad'
import bfooter from '~/components/bfooter'
export default {
  data () {
    return {
      article:'',
      isShowBanner:true,
      isScroll:false,
      talk:{
        
      }
    }
  },
  async asyncData ({app}) {
    let res  = await app.$axios.$get('/article/getPartOfArticle')
    return { article: res.data}
  },
  components: {
    barticle,swiper,about,hotArticle,ad,friends,bfooter,tags,sentence,music
  },
  methods: {
  },
  mounted () {
    var _self = this
    // console.log("\n     ___________________________\n    |             |             |\n    |___          |          ___|\n    |_  |         |         |  _|\n   .| | |.       ,|.       .| | |.\n   || | | )     ( | )     ( | | ||\n   '|_| |'       `|'       `| |_|'\n    |___|         |         |___|\n    |             |             |\n    |_____________|_____________|\n\n")
  }
}
</script>
<style src='~/assets/css/global.less' lang="less"></style>
<style src='~/assets/css/index.less' lang="less" scoped></style>
