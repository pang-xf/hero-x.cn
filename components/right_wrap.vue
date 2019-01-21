<template>
  <section class="wrap_items">
    <textWrapItem :title = 'announcement.title' :content = 'announcement.content'/>
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
import textWrapItem from '~/components/textWrapItem'
export default {
  data () {
    return {
      article:'',
      isShowBanner:true,
      isScroll:false,
      talk:{
        
      },
      announcement:{
        title:'公告',
        content:'最昏暗的地方也变得明亮~。本站功能逐渐开发中... 开发时间->无限期延长~'
      }
    }
  },
  async asyncData ({app}) {
    let res  = await app.$axios.$get('/article/getPartOfArticle')
    return { article: res.data}
  },
  components: {
    barticle,swiper,about,hotArticle,ad,friends,sentence,music,textWrapItem
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
