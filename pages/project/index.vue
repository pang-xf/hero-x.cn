<template>
  <div  class="global">
    <div class="project">
    </div>
    <bfooter/>
  </div>
</template>
<script>
import bfooter from '~/components/bfooter'
export default {
  data () {
    return {
        userInfo:'',
        isScroll:false,
    }
  },
  async asyncData ({app,route}) {
  },
  components: {
    bfooter
  },
  methods: {
    handleScroll(){
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop,_self = this
      if(scrollTop>170){
          _self.isScroll = true
      }else{
          _self.isScroll = false
      }
    },
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll);
  }
}
</script>
<style src='~/assets/css/project.less' lang="less"></style>