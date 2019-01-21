<template>
  <div class='textWrapItem left_item'>
    <p class="name"><i class="iconfont">&#xe734;</i>{{title}}</p>
    <div class="textWrapItem_wrap">
      {{content}}
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  props: ['title','content']
}
</script>
<style src='~/assets/css/global.less' lang="less"></style>
<style src='~/assets/css/index.less' lang="less" scoped></style>