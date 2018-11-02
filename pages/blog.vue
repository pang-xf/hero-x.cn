<template>
  <div class="global">
    <div class="global-bg" id="bg" ></div>
    <bheads/>
    <ad/>
    <section class="container">
      <div class="left-content">
        <about/>
        <hotArticle/>
        <friends/>
      </div>
      <div class="right-content">
        <!-- <swiper/> -->
        <barticle v-for="(item,index) in 10" :key="index"></barticle>
        <p style="margin: 20px auto;text-align:center">这里应该有个分页器</p>
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
    }
  },
  components: {
    barticle,swiper,about,hotArticle,ad,friends,bfooter,bheads
  },
  mounted () {
    new JParticles.particle('#bg',{
      opacity:0.5,
      proximity: 90,
    });
    // console.log("\n     ___________________________\n    |             |             |\n    |___          |          ___|\n    |_  |         |         |  _|\n   .| | |.       ,|.       .| | |.\n   || | | )     ( | )     ( | | ||\n   '|_| |'       `|'       `| |_|'\n    |___|         |         |___|\n    |             |             |\n    |_____________|_____________|\n\n")
  }
}
</script>
<style src='~/assets/css/global.less' lang="less"></style>
<style src='~/assets/css/index.less' lang="less" scoped></style>
