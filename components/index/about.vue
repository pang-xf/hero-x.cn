<template>
  <div class='index-about'>
    <div class="avatar">
      <div class="img-wrap">
        <img :src="person.avatar" alt="avatar">
      </div>
      <p>深圳一个没有爱情的地方❤️</p>
      <div class="links">
        <span><a href="#">知乎</a></span>
        <span><a href="#">围脖</a></span>
        <span><a href="#">Github</a></span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      person:{
        avatar:'https://ws4.sinaimg.cn/large/006tNbRwgy1fwditqwz5kj30b40b4glp.jpg'
      }
    }
  },
  components: {
  },
  methods: {
  },
  mounted () {
  }
}
</script>
<style src='~/assets/css/global.less' lang="less"></style>
<style src='~/assets/css/index.less' lang="less" scoped></style>