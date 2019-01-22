minimal<template>
  <div class="herox-header">
    <div class="header">
      <header>
        <div class="header-wrap">
          <div class="site-title">
            <nuxt-link to='/'>wonderful</nuxt-link>
          </div>
          <nav class="site-navigation">
            <ul class="nav-menu">
              <li class="nav-item"><nuxt-link to="/archive">Minimal</nuxt-link></li>
              <li class="nav-item"><nuxt-link to="/project">Project</nuxt-link></li>
              <li class="nav-item"><nuxt-link to='/friends'>Friends</nuxt-link></li>
              <li class="nav-item"><nuxt-link to='/resume'>Resume</nuxt-link></li>
              <li class="nav-item"><nuxt-link to='/about'>About</nuxt-link></li>
              <li class="nav-item"><nuxt-link to="/todo">Todo</nuxt-link></li>
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