<template>
  <div class='global'>
      <bheads/>
      <h2 class="friends_title">FRIENDS</h2>
      <div class="friends">
        <a href="http://www.baidu.com" class="friends_card">
          <img src="https://ws1.sinaimg.cn/large/006tNbRwgy1fyhwhz6lwsj30b40b4aa7.jpg" alt="" class="avatar">
          <div class="right_wrap">
            <div class="name">你的名字</div>
            <div class="text" title="嘻嘻嘻嘻嘻嘻哈哈哈哈哈哈嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻哈哈哈哈哈哈嘻嘻嘻嘻嘻嘻">嘻嘻嘻嘻嘻嘻哈哈哈哈哈哈嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻哈哈哈哈哈哈嘻嘻嘻嘻嘻嘻</div>
          </div>
        </a>
        <a href="http://www.baidu.com" class="friends_card">
          <img src="https://ws1.sinaimg.cn/large/006tNbRwgy1fyhwhz6lwsj30b40b4aa7.jpg" alt="" class="avatar">
          <div class="right_wrap">
            <div class="name">你的名字</div>
            <div class="text" title="嘻嘻嘻嘻嘻嘻哈哈哈哈哈哈嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻哈哈哈哈哈哈嘻嘻嘻嘻嘻嘻">嘻嘻嘻嘻嘻嘻哈哈哈哈哈哈嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻哈哈哈哈哈哈嘻嘻嘻嘻嘻嘻</div>
          </div>
        </a>
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