<template>
  <section class="wrap_items left_wrap" :class="[isScroll?'fixed_items':'']">
    <about/>
    <hotArticle v-show="!isScroll"/>
    <sentence/>
    <!-- <tags/> -->
  </section>
</template>

<script>
import swiper from '~/components/index/swiper'
import about from '~/components/index/about'
import tags from '~/components/tags'
import ad from '~/components/ad'
import hotArticle from '~/components/index/hotArticle'
import music from '~/components/music'
import sentence from '~/components/sentence'
import friends from '~/components/index/friends'
import textWrapItem from '~/components/textWrapItem'
export default {
  data () {
    return {
      article:'',
      isShowBanner:true,
      isScroll:false,
      talk:{
        
      },
      scrollTop:0
    }
  },
  components: {
    swiper,about,ad,friends,tags,sentence,music,friends,textWrapItem,hotArticle
  },
  methods: {
  },
  mounted () {
    var _self = this;
    window.addEventListener(
        "scroll",
        () => {
          this.scrollTop =
            document.documentElement.scrollTop ||
            window.pageYOffset ||
            document.body.scrollTop;
          // 控制滚动按钮的隐藏或显示
          if (this.scrollTop > 400) {
            _self.isScroll = true;
          } else {
            _self.isScroll = false;
          }
        },
        true
      );
  }
}
</script>
<style src='~/assets/css/global.less' lang="less"></style>
<style src='~/assets/css/index.less' lang="less" scoped></style>
