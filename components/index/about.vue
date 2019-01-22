<template>
  <div class='about_me left_item'>
    <p class="name"><i class="iconfont">&#xe60e;</i>About</p>
    <div class="about_me_wrap">
      <div class="about_me_wrap_line1">
        <img :src="person.avatar" alt="" class="avatar">
        <span class="user_name">李宇童鞋丶</span>
      </div>
      <div class="about_me_wrap_line2">
        <p>间歇性踌躇满志，持续性混吃等死。</p>
        <p>置灰前端、vue不知道什么等级工程师、jquery骨灰级玩家、webpack乱配置工程师、全都没意思星人。</p>
      </div>
      <div class="about_me_wrap_line3">
        <span @click="goToAboutMe">read more...</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      person:{
        avatar:'https://ws1.sinaimg.cn/large/006tNc79gy1fz9m6s64k4j30b40b4dfy.jpg'
      }
    }
  },
  components: {
  },
  methods: {
    goToAboutMe(){
      this.$router.push({
        path:'/about'
      })
    }
  },
  mounted () {
  }
}
</script>
<style src='~/assets/css/global.less' lang="less"></style>
<style src='~/assets/css/index.less' lang="less" scoped></style>