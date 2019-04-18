<template>
  <div class='globalTips' v-if="$store.state.tips.showGlTips">
    <div class="glt_close" @click="close">
      <i class="iconfont">&#xe612;</i>
    </div>
    <div class="glt_text">
      <p>嗯.....  还在建设中....  </p>
      <p>有时候会抽风....    勿怪~</p>
    </div>
  </div>
</template>
<script>
import Cookie from 'js-cookie'
export default {
  data () {
    return {
    }
  },
  components: {
  },
  methods: {
    close(){
      Cookie.set('isCloseGlobalModal',true, { expires: 2 })
      this.$store.commit('tips/SET_SHOWGLTIPS',false)
    }
  },
  mounted () {
    if(Cookie.get('isCloseGlobalModal')){
      this.$store.commit('tips/SET_SHOWGLTIPS',false)
    }
  }
}
</script>