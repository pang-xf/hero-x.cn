<template>
  <div>
    <bheads/>
    <div class="main">
      <leftWrap/>
      <nuxt/>
    </div>
    <bfooter/>
  </div>
</template>
<script>
import bheads from '~/components/bhead'
import bfooter from '~/components/bfooter'
import leftWrap from '~/components/left_wrap'
export default {
  components: {
    bheads,bfooter,leftWrap
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
  width: 1000px;
  min-height: calc(100vh - 140px);
  margin:  70px auto 10px auto;
  position: relative;
}
</style>
