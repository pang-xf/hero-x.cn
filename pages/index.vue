<template>
  <div class="global">
    <div class="global-bg"></div>
    <section class="container">
      <div class="left-content">
      </div>
      <div class="right-content">
        <barticle></barticle>
      </div>
    </section>
  </div>
</template>

<script>
import barticle from '../components/barticle'
export default {
  components: {
    barticle
  },
  mounted () {
    // console.log("\n     ___________________________\n    |             |             |\n    |___          |          ___|\n    |_  |         |         |  _|\n   .| | |.       ,|.       .| | |.\n   || | | )     ( | )     ( | | ||\n   '|_| |'       `|'       `| |_|'\n    |___|         |         |___|\n    |             |             |\n    |_____________|_____________|\n\n")
    // console.log('');
  }
}
</script>
<style src='../assets/css/index.less' lang="less" scoped></style>
<style src='../assets/css/global.less' lang="less"></style>
