<template>
  <div class='left_item'>
    <p class="name">标签</p>
    <div class="tag-wrap">
      <div class="tags" v-for="(item,index) in $store.state.articles.articles" :key="index">
        <img :src = item.image alt="标签">
        {{item.tag}}
      </div>
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