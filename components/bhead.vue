<template>
  <div class="herox-header">
    <div class="header">
      <header>
        <div class="header-wrap">
          <div class="site-title">
            <nuxt-link to='/'>wonderful</nuxt-link>
          </div>
          <nav class="site-navigation">
            <ul class="nav-menu">
              <li class="nav-item"><nuxt-link to="/archive">极简</nuxt-link></li>
              <li class="nav-item"><nuxt-link to="/project">项目</nuxt-link></li>
              <li class="nav-item"><nuxt-link to='/friends'>朋友</nuxt-link></li>
              <li class="nav-item"><nuxt-link to='/resume'>简历</nuxt-link></li>
              <li class="nav-item"><nuxt-link to='/about'>关于</nuxt-link></li>
              <li class="nav-item"><nuxt-link to="/todo">待做</nuxt-link></li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
    }
  },
  methods: {
  }
}
</script>
<style src='~/assets/css/head.less' lang="less" scoped></style>