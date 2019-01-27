<template>
  <div class='hotArticle left_item'>
    <p class="name"><i class="iconfont">&#xe661;</i>HotArticles</p>
    <div class="hotArticle-wrap" v-for="(item,index) in hots" :key="index">
      <p class="title" :title = item.title><span>{{index+1}}</span>{{item.title}}</p>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      hots:[]
    }
  },
  components: {
  },
  methods: {
  },
  created () {
    let _self = this;
    this.$axios.post('/api/findByConditions',{condition:'hots'}).then((res)=>{
      _self.hots = res.data.data;
    });
  }
}
</script>
<style src='~/assets/css/global.less' lang="less"></style>
<style src='~/assets/css/index.less' lang="less" scoped></style>