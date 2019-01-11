<template>
  <div class='search'>
    <p class="name">搜索</p>
    <div class="hotArticle-wrap" v-for="(item,index) in 5 " :key="index">
      <p class="title"><span>1</span>文章题目文章题目文章题目</p>
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