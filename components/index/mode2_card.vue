<template>
  <div class='mode2_article' @click="goDetail(id)">
    <div class="post-image"><img :src="article.image" /></div>
    <div class="mode2_info">
      <nuxt-link to="#" class="mode2_tag">{{article.tag}}</nuxt-link>
      <h3>{{article.title}}</h3>
      <p class="mode2_desc">{{article.description}}</p>
      <div class="mode2_author">
        <img src="https://ws1.sinaimg.cn/large/006tNc79gy1fz9m6s64k4j30b40b4dfy.jpg" alt="" class="mode2_avatar">
        <div class="mode2_author_info">
          <span class="author_name">李宇童鞋丶</span>
          <time class="pub_time">{{article.time}}</time>
        </div>
      </div>
      <div class="mode2_meta">
        <span>
          <i class="iconfont">&#xe666;</i>
          {{article.like}}
        </span>
        <span>
          <i class="iconfont">&#xe664;</i>
          {{article.read}}
        </span>
        <span>
          <i class="iconfont">&#xe665;</i>
          {{article.comments.length}}
        </span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      // article:{
      //   banner:'https://source.unsplash.com/DnWYw0zLJBg',
      //   title:'10 Best Things to Do in Seattle',
      //   content:'Seattle is a seaport city on the west coast of the United States...',
      //   tag:'Travel',
      //   time:'2018-10-10',
      //   read:'20',
      //   comments:'20',
      //   like:'20',
      // }
    }
  },
  props: ['article','id'],
  components: {
  },
  methods: {
    goDetail(pid){
      this.$router.push({path:'/article/'+pid})
    }
  },
  mounted () {
  }
}
</script>

<style src='~/assets/icon/iconfont.css' scoped></style>
<style src='~/assets/css/article.less' lang="less" scoped></style>