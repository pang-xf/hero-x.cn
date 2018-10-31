<template>
  <div  class="global">
    <div class="global-bg" id="bg" ></div>
    <bheads/>
    <div class='article-page'>
      <div class="content" v-html="markedContent(content)"></div>
    </div>
    <bfooter/>
  </div>
</template>
<script>
import marked from '~/plugins/marked'
import bheads from '~/components/bhead'
import bfooter from '~/components/bfooter'
export default {
  data () {
    return {
      content:`* 测试`,
      data:''
    }
  },
  async asyncData ({app}) {
    let data  = await app.$axios.$get('/getUserMsg')
    console.log(data);
    return { data: data}
  },
  components: {
    bfooter,bheads
  },
  methods: {
    markedContent(content) {
      return marked(content, null, true)
    }
  },
  mounted () {
    new JParticles.particle('#bg',{
      opacity:0.5,
      proximity: 90,
    });
  }
}
</script>
<style src='~/assets/css/global.less' lang="less"></style>
<style src='~/assets/css/index.less' lang="less" scoped></style>
<style src='~/assets/css/article.less' lang="less"></style>