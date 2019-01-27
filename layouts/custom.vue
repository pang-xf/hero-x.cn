<template>
  <div>
    <bheads/>
    <div class="main">
      <leftWrap/>
      <nuxt/>
      <rightWrap/>
    </div>
    <bfooter/>
  </div>
</template>
<script>
import bheads from '~/components/bhead'
import bfooter from '~/components/bfooter'
import leftWrap from '~/components/left_wrap'
import rightWrap from '~/components/right_wrap'
export default {
  components: {
    bheads,bfooter,leftWrap,rightWrap
  },
  data(){
    return{
    }
  },
  mounted () {
  },
}
</script>

<style>
.main{
  width: 1100px;
  min-height: calc(100vh - 140px);
  margin:  20px auto 10px auto;
  display: flex;
  justify-content: center;
  position: relative;
}
</style>
