<template>
  <div class="index-page">
    <div class="canvas-bg-wrap">
      <div class="canvas-bg" id="bg">
      </div>
      <div class="index-page-title-wrap">
        <div class="avatar">
          <img :src="avatar" alt="">
        </div>
        <p>HERO-X.CN</p>
        <a href="/blog">主页</a>
      </div>
    </div>
    <!-- <div class="index-menus">
      
    </div> -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      avatar:'https://ws2.sinaimg.cn/large/006tNbRwgy1fwtr0te64qj30b40b4q2y.jpg'
    }
  },
  components: {
  },
  mounted () {
    new JParticles.particle('#bg',{
      opacity:0.5,
      proximity: 20,
      // 开启视差效果
      parallax: true
    });
    // console.log("\n     ___________________________\n    |             |             |\n    |___          |          ___|\n    |_  |         |         |  _|\n   .| | |.       ,|.       .| | |.\n   || | | )     ( | )     ( | | ||\n   '|_| |'       `|'       `| |_|'\n    |___|         |         |___|\n    |             |             |\n    |_____________|_____________|\n\n")
  }
}
</script>
<style src='~/assets/css/global.less' lang="less"></style>
<style src='~/assets/css/index.less' lang="less" scoped></style>
