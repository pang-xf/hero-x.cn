<template>
  <section class="wrap_items left_wrap">
    <about/>
    <!-- <friends/> -->
    <tags/>
  </section>
</template>

<script>
import swiper from '~/components/index/swiper'
import about from '~/components/index/about'
import tags from '~/components/tags'
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
    swiper,about,ad,friends,tags
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
