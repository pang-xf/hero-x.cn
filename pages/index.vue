<template>
  <div class="global">
    <div class="global-bg"></div>
    <section class="container">
      <div class="left-content">
        
      </div>
      <div class="right-content">
        <swiper/>
        <barticle v-for="(item,index) in 10" :key="index"></barticle>
      </div>
    </section>
  </div>
</template>

<script>
import barticle from '../components/barticle'
import swiper from '../components/swiper'
export default {
  components: {
    barticle,swiper
  },
  mounted () {
    // console.log("\n     ___________________________\n    |             |             |\n    |___          |          ___|\n    |_  |         |         |  _|\n   .| | |.       ,|.       .| | |.\n   || | | )     ( | )     ( | | ||\n   '|_| |'       `|'       `| |_|'\n    |___|         |         |___|\n    |             |             |\n    |_____________|_____________|\n\n")
    // console.log('');
  }
}
</script>
<style src='../assets/css/global.less' lang="less"></style>
<style src='../assets/css/index.less' lang="less" scoped></style>
