<template>
  <div class="global">
    <div class="global-bg"></div>
    <ad/>
    <section class="container">
      <div class="left-content">
        <about/>
        <hotArticle/>
      </div>
      <div class="right-content">
        <swiper/>
        <barticle v-for="(item,index) in 10" :key="index"></barticle>
        <p style="margin: 20px auto;text-align:center">这里应该有个分页器</p>
      </div>
    </section>
  </div>
</template>

<script>
import barticle from '../components/index/barticle'
import swiper from '../components/index/swiper'
import about from '../components/index/about'
import hotArticle from '../components/index/hotArticle'
import ad from '../components/ad'
export default {
  components: {
    barticle,swiper,about,hotArticle,ad
  },
  mounted () {
    // console.log("\n     ___________________________\n    |             |             |\n    |___          |          ___|\n    |_  |         |         |  _|\n   .| | |.       ,|.       .| | |.\n   || | | )     ( | )     ( | | ||\n   '|_| |'       `|'       `| |_|'\n    |___|         |         |___|\n    |             |             |\n    |_____________|_____________|\n\n")
    // console.log('');
  }
}
</script>
<style src='../assets/css/global.less' lang="less"></style>
<style src='../assets/css/index.less' lang="less" scoped></style>
