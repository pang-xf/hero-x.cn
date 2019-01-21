<template>
  <div>
    <bheads/>
    <nuxt class="ng"/>
    <bfooter/>
  </div>
</template>
<script>
import bheads from '~/components/bhead'
import bfooter from '~/components/bfooter'
export default {
  components: {
    bheads,bfooter
  },
  mounted () {
    
  },
}
</script>
