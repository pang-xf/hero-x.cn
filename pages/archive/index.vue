<template>
  <div  class="global">
    <div class="archive">
      <div class="wrap">
        <h3><span>#</span> 极简の文章</h3>
        <div class="archives">
          <div class="time">2019-1</div>
          <div class="name_wrap">
            <nuxt-link class="name" to="/">解决微信头像canvas跨域的问题</nuxt-link>
            <div class="detail">25人围观/40评</div>
          </div>
          <div class="name_wrap">
            <nuxt-link class="name" to="/">解决微信头像canvas跨域的问题</nuxt-link>
            <div class="detail">25人围观/40评</div>
          </div>
          <div class="name_wrap">
            <nuxt-link class="name" to="/">解决微信头像canvas跨域的问题</nuxt-link>
            <div class="detail">25人围观/40评</div>
          </div>
        </div>
        <div class="archives">
          <div class="time">2019-12</div>
          <div class="name_wrap">
            <nuxt-link class="name" to="/">解决微信头像canvas跨域的问题</nuxt-link>
            <div class="detail">25人围观/40评</div>
          </div>
          <div class="name_wrap">
            <nuxt-link class="name" to="/">解决微信头像canvas跨域的问题</nuxt-link>
            <div class="detail">25人围观/40评</div>
          </div>
          <div class="name_wrap">
            <nuxt-link class="name" to="/">解决微信头像canvas跨域的问题</nuxt-link>
            <div class="detail">25人围观/40评</div>
          </div>
        </div>
      </div>
      <div class="wrap">
        <h3><span>#</span> 极简の分类</h3>
        <div class="archives_fl">
          <span class="fl_item">前端</span>
          <span class="fl_item">前端</span>
          <span class="fl_item">前端</span>
          <span class="fl_item">前端</span>
          <span class="fl_item">前端</span>
          <span class="fl_item">前端</span>
          <span class="fl_item">前端</span>
          <span class="fl_item">前端</span>
          <span class="fl_item">前端</span>
          <span class="fl_item">前端</span>
          <span class="fl_item">前端</span>
          <span class="fl_item">前端</span>
        </div>
      </div>
      <div class="wrap">
        <h3><span>#</span> 极简の友链</h3>
        <div class="archives_fl">
          <nuxt-link  to = '/' class="fl_item">herox</nuxt-link>
          <nuxt-link  to = '/' class="fl_item">herox</nuxt-link>
          <nuxt-link  to = '/' class="fl_item">herox</nuxt-link>
          <nuxt-link  to = '/' class="fl_item">herox</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  // head: {
  //   script: [
  //     { src: 'https://webapi.amap.com/maps?v=1.4.8&key=fbfea934b19ea5bb8ad1d741a5b10077' }
  //   ],
  // },
  data () {
    return {
        userInfo:'',
        isScroll:false,
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
<style src='~/assets/css/archive.less' lang="less"></style>