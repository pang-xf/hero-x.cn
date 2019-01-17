<template>
  <div class='hotArticle' style="margin-top:10px">
    <p class="name">标签</p>
    <div class="tag-wrap">
      <div class="tags" v-for="(item,index) in 15 " :key="index">前端</div>
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