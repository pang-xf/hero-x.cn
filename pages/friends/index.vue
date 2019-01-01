<template>
  <div class='global'>
      <bheads/>
      <div class="friends">
        
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
    }
  },
  components: {
    bfooter,bheads
  },
  methods: {
  },
  mounted () {
  }
}
</script>
<style src='~/assets/css/friends.less' lang="less"></style>