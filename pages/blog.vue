<template>
  <div class="global">
    <bheads :showBanner='isShowBanner' :isScroll.sync = 'isScroll'/>
    <!-- <ad/> -->
    <section class="container" :class="isShowBanner?'hasBannerMargin':''">
      <div class="left-content">
        <about/>
        <hotArticle/>
        <friends/>
      </div>
      <div class="right-content">
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
import friends from '~/components/index/friends'
import ad from '~/components/ad'
import bheads from '~/components/bhead'
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
    barticle,swiper,about,hotArticle,ad,friends,bfooter,bheads
  },
  methods: {
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
    var _self = this
    window.addEventListener('scroll', this.handleScroll);
    // this.$axios.get("/article/getPartOfArticle").then(res=>{
    //   console.log(res)
    //   _self.article = res.data.data
    // })
    // console.log("\n     ___________________________\n    |             |             |\n    |___          |          ___|\n    |_  |         |         |  _|\n   .| | |.       ,|.       .| | |.\n   || | | )     ( | )     ( | | ||\n   '|_| |'       `|'       `| |_|'\n    |___|         |         |___|\n    |             |             |\n    |_____________|_____________|\n\n")
  }
}
</script>
<style src='~/assets/css/global.less' lang="less"></style>
<style src='~/assets/css/index.less' lang="less" scoped></style>
