<template>
  <div class='left_item'>
    <p class="name"><i class="iconfont">&#xe88a;</i>Tags</p>
    <div class="tag-wrap">
      <div class="tags" v-for="(item,index) in tags" :key="index">
        <img :src = item.image alt="">
        {{item.tag}}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      tags:''
    }
  },
  components: {
  },
  methods: {
  },
  created () {
    let _self = this;
    console.log(this.$axios.baseURL);
    this.$axios.post('/api/findByConditions',{condition:'tag'}).then((res)=>{
      _self.tags = res.data.data
    });
  }
}
</script>
<style src='~/assets/css/global.less' lang="less"></style>
<style src='~/assets/css/index.less' lang="less" scoped></style>