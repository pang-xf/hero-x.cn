<template>
  <div class='global'>
      <h2 class="friends_title">FRIENDS</h2>
      <div class="friends">
        <a href="http://guogai.top/" class="friends_card">
          <img src="https://ws1.sinaimg.cn/large/006tNbRwgy1fynfnldu89j308c08ct8q.jpg" alt="" class="avatar">
          <div class="right_wrap">
            <div class="name">gayの太君</div>
            <div class="text" title="gay王">gay王</div>
          </div>
        </a>
        <a href="https://www.qqstop.cn/" class="friends_card">
          <img src="https://www.qqstop.cn/images/logo.jpg" alt="" class="avatar">
          <div class="right_wrap">
            <div class="name">Kevan’s Blog</div>
            <div class="text" title="用欣赏的眼光去看待别人，用感恩的情怀去体验生活。">用欣赏的眼光去看待别人，用感恩的情怀去体验生活。</div>
          </div>
        </a>
      </div>
  </div>
</template>
<script>
export default {
  layout: function(context){
    return 'custom'
  },
  data () {
    return {
    }
  },
  methods: {
  },
  mounted () {
  }
}
</script>
<style src='~/assets/css/friends.less' lang="less"></style>