<template>
  <div  class="global">
    <bheads/>
    <div class="project">
    </div>
    <bfooter/>
  </div>
</template>
<script>
import bheads from '~/components/bhead'
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
    bfooter,bheads
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