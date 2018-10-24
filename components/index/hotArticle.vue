<template>
  <div class='hotArticle'>
    <p class="name">热门文章</p>
    <div class="hotArticle-wrap" v-for="(item,index) in 5 " :key="index">
      <a class="title" href="#">文章题目文章题目文章题目</a>
      <p class="read">2200 次阅读</p>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
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