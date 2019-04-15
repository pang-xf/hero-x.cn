<template>
  <div class='hotArticle left_item'>
    <p class="name"><i class="iconfont">&#xe661;</i>HotArticles</p>
    <div class="hotArticle-wrap" v-for="(item,index) in hots" :key="index" v-if="hots" @click="gotoDetail(item.id)">
      <p class="title" :title = item.title><span>{{index+1}}</span>{{item.title}}</p>
    </div>
    <div class="loading" v-if="hots.length==0" style="padding:0px 15px 5px 10px">
      加载中...
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
    gotoDetail(id){
      this.$router.push({path:'/article/'+id})
    }
  },
  created () {
    let _self = this;
    this.$axios.post('/api/findHotsArticle').then((res)=>{
      _self.hots = res.data.data;
    });
  }
}
</script>
<style src='~/assets/css/global.less' lang="less"></style>
<style src='~/assets/css/index.less' lang="less" scoped></style>