<template>
  <div class='hotArticle left_item'>
    <p class="name">文章</p>
    <div class="hotArticle-wrap" v-for="(item,index) in $store.state.articles.articles.slice(0,5)" :key="index">
      <p class="title" :title = item.title><span>{{index+1}}</span>{{item.title}}</p>
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