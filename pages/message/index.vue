<template>
  <div class="message">
    <div class="none_build">
      <i class="iconfont">&#xe676;</i>正在建设中...
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
        userInfo:'',
    }
  },
  async asyncData ({app,route}) {
  },
  methods: {
  },
  mounted () {
  }
}
</script>
<style src='~/assets/css/project.less' lang="less"></style>