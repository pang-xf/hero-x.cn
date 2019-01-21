<template>
  <div class="global">
    <section class="container">
      <leftWrap/>
      <div class="content">
        <!-- <ad/> -->
        <barticle v-for="(item,index) in $store.state.articles.articles" :key="index" :article='item' :id="item._id"></barticle>
      </div>
      <rightWrap/>
    </section>
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
import leftWrap from '~/components/left_wrap'
import rightWrap from '~/components/right_wrap'
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
  fetch ({ app,store, params }) {
    return app.$axios.get('/article/getPartOfArticle')
    .then((res) => {
      store.commit('articles/SET_ARTICLE', res.data.data)
    })
  },
  // async asyncData ({app}) {
  //   let res  = await app.$axios.$get('/article/getPartOfArticle')
  //   return { article: res.data}
  // },
  components: {
    barticle,swiper,about,hotArticle,ad,friends,tags,sentence,music,leftWrap,rightWrap
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
