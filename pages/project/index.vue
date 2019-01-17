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
    }
  },
  async asyncData ({app,route}) {
  },
  components: {
    bfooter
  },
  methods: {
  },
  mounted () {
  }
}
</script>
<style src='~/assets/css/project.less' lang="less"></style>