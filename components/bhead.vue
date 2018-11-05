<template>
  <div class="">
    <div class="header" v-if="!isScroll">
      <div class="blurbg"></div>
      <header class='header'>
        <div class="header-wrap">
          <div class="site-title">
            <a href="/">HERO-X.CN</a>
          </div>
          <nav class="site-navigation">
            <ul class="nav-menu">
              <li class="nav-item"><a href="/blog">首页</a></li>
              <li class="nav-item"><a href="/resource">资源</a></li>
              <li class="nav-item"><a href="/project">项目</a></li>
              <li class="nav-item"><a href="/friends">朋友</a></li>
              <li class="nav-item"><a href="/friends">简历</a></li>
              <li class="nav-item"><a href="/about">关于</a></li>
            </ul>
          </nav>
        </div>
      </header>
      <div class="heroxBg"></div>
    </div>
    <div class="scroll-header" v-else>
      <header class='header'>
        <div class="header-wrap">
          <div class="site-title">
            <a href="/">HERO-X.CN</a>
          </div>
          <nav class="site-navigation">
            <ul class="nav-menu">
              <li class="nav-item"><a href="/blog">首页</a></li>
              <li class="nav-item"><a href="/resource">资源</a></li>
              <li class="nav-item"><a href="/project">项目</a></li>
              <li class="nav-item"><a href="/friends">朋友</a></li>
              <li class="nav-item"><a href="/friends">简历</a></li>
              <li class="nav-item"><a href="/about">关于</a></li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      isScroll:false
    }
  },
  components: {
  },
  methods: {
    handleScroll(){
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop,_self = this
      if(scrollTop>170){
          _self.isScroll = true
      }else{
          _self.isScroll = false
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  }
}
</script>
<style src='~/assets/css/head.less' lang="less" scoped></style>