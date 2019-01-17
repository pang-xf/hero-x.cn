<template>
  <div class="herox-header">
    <div class="header" v-if="!isScroll">
      <header>
        <div class="header-wrap">
          <div class="site-title">
            <nuxt-link to='/'>HERO-X.CN</nuxt-link>
          </div>
          <nav class="site-navigation">
            <ul class="nav-menu">
              <!-- <li class="nav-item"><nuxt-link to="/archive">极简</nuxt-link></li> -->
              <!-- <li class="nav-item"><nuxt-link to="/project">项目</nuxt-link></li> -->
              <li class="nav-item"><nuxt-link to='/friends'>朋友</nuxt-link></li>
              <!-- <li class="nav-item"><a href="/friends">简历</a></li> -->
              <li class="nav-item"><nuxt-link to='/about'>关于</nuxt-link></li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
    <div class="scroll-header" v-if="isScroll">
      <header>
        <div class="header-wrap">
          <div class="site-title">
            <nuxt-link to='/'>HERO-X.CN</nuxt-link>
          </div>
          <nav class="site-navigation">
            <ul class="nav-menu">
              <!-- <li class="nav-item"><nuxt-link to="/archive">极简</nuxt-link></li> -->
              <!-- <li class="nav-item"><nuxt-link to="/project">项目</nuxt-link></li> -->
              <!-- <li class="nav-item"><nuxt-link to='/friends'>朋友</nuxt-link></li> -->
              <!-- <li class="nav-item"><a href="/friends">简历</a></li> -->
              <li class="nav-item"><nuxt-link to='/about'>关于</nuxt-link></li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  </div>
</template>
<script>
export default {
  props: ['isScroll'],
  data(){
    return{
    }
  },
  methods: {
  }
}
</script>
<style src='~/assets/css/head.less' lang="less" scoped></style>