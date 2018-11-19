<template>
  <div class="herox-header">
    <div class="header" v-if="!isScroll">
      <header>
        <div class="header-wrap">
          <div class="site-title">
            <a href="/">HERO-X.CN</a>
          </div>
          <nav class="site-navigation">
            <ul class="nav-menu">
              <li class="nav-item"><a href="/blog">首页</a></li>
              <!-- <li class="nav-item"><a href="/resource">资源</a></li> -->
              <!-- <li class="nav-item"><a href="/project">项目</a></li> -->
              <li class="nav-item"><a href="/friends">朋友</a></li>
              <!-- <li class="nav-item"><a href="/friends">简历</a></li> -->
              <li class="nav-item"><a href="/about">关于</a></li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
    <div class="heroxBg" v-if="showBanner">
      <img :src="banner[active]" alt="banner">
      <div class="changeBtn" @click="changeBanner">不喜欢 😡 换一张?</div>
      <!-- <img src="~/assets/image/play.png" alt="play" class="play-icon" v-show="!isPlayVideo" @click="play"> -->
      <!-- <video src="~/assets/1.mp4"  controls ref="bannerVideo" v-if="!isPlayVideo"></video> -->
    </div>
    <div class="scroll-header" v-if="isScroll">
      <header>
        <div class="header-wrap">
          <div class="site-title">
            <a href="/">HERO-X.CN</a>
          </div>
          <nav class="site-navigation">
            <ul class="nav-menu">
              <li class="nav-item"><a href="/blog">首页</a></li>
              <!-- <li class="nav-item"><a href="/resource">资源</a></li> -->
              <!-- <li class="nav-item"><a href="/project">项目</a></li> -->
              <li class="nav-item"><a href="/friends">朋友</a></li>
              <!-- <li class="nav-item"><a href="/friends">简历</a></li> -->
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
  props: ['showBanner','isScroll'],
  data(){
    return{
      banner:['https://ws2.sinaimg.cn/large/006tNbRwgy1fwzckvpqrxj318g0p0npe.jpg','https://ws4.sinaimg.cn/large/006tNbRwgy1fx5nofzh9dj31gb0vhqa4.jpg','https://ws2.sinaimg.cn/large/006tNbRwgy1fx5nopyb9uj31kw0vu0xc.jpg'],
      isPlayVideo:false,
      active:0
    }
  },
  methods: {
    play(){
      this.isPlayVideo = true
    },
    changeBanner(){
      let len = this.banner.length-1
      if(this.active==len){
        this.active = 0
      }else{
        this.active++
      }
    }
  }
}
</script>
<style src='~/assets/css/head.less' lang="less" scoped></style>