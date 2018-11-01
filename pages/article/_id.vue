<template>
  <div  class="global">
    <div class="global-bg" id="bg" ></div>
    <bheads/>
    <div class='article-page'>
      <div class="content" v-html="markedContent(data)"></div>
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
      content:'* sddd',
      data:''
    }
  },
  async asyncData ({app}) {
    let res  = await app.$axios.$get('/getUserMsg')
    // console.log(res.data);
    return { data: res.data}
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
    // this.$axios.$get('/getUserMsg').then(res=>{
    //   console.log(res);
    // })
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