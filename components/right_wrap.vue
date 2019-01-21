<template>
  <section class="wrap_items">
    <music/>
    <sentence/>
    <hotArticle/>
    <!-- <friends/> -->
  </section>
</template>

<script>
import barticle from '~/components/index/barticle'
import swiper from '~/components/index/swiper'
import about from '~/components/index/about'
import hotArticle from '~/components/index/hotArticle'
import music from '~/components/music'
import sentence from '~/components/sentence'
import friends from '~/components/index/friends'
import ad from '~/components/ad'
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
    barticle,swiper,about,hotArticle,ad,friends,sentence,music
  },
  methods: {
  },
  mounted () {
    var _self = this
  }
}
</script>
<style src='~/assets/css/global.less' lang="less"></style>
<style src='~/assets/css/index.less' lang="less" scoped></style>
