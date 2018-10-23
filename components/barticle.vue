<template>
  <div class='article'>
    <div class="art-left">
      <p class="title">标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题</p>
      <p class="abstrack">描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述</p>
      <div class="meta">
        <span class="tag"><i class="iconfont icon-biaoqian"></i><a href="#">web</a></span>
        <span class="time"><i class="iconfont icon-rili"></i>2018-10-10</span>
        <span class="read"><i class="iconfont icon-yanjing-kejian"></i><a href="#">20</a></span>
        <span class="comments"><i class="iconfont icon-pinglun"></i><a href="#">20</a></span>
        <span class="like"><i class="iconfont icon-dianzan"></i><a href="#">20</a></span>
      </div>
    </div>
    <a class="art-right" href="#">
      <img src="https://ws4.sinaimg.cn/large/006tNbRwgy1fwditqwz5kj30b40b4glp.jpg" alt="">
    </a>
  </div>
</template>
<script>
export default {
  data () {
    return {
      article:{
        banner:'https://ws4.sinaimg.cn/large/006tNbRwgy1fwditqwz5kj30b40b4glp.jpg',
        title:'标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题',
        content:'描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述',
        tag:'web',
        time:'2018-10-10',
        read:'20',
        comments:'20',
        like:'20',
      }
    }
  },
  components: {
  },
  methods: {
  },
  mounted () {
  }
}
</script>

<style src='../assets/icon/iconfont.css' scoped></style>
<style src='../assets/css/article.less' lang="less" scoped></style>