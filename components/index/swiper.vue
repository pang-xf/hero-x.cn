<template>
  <a class='swiper' href="#">
    <div class="swiper-content" @mouseover="mouseover" @mouseout="mouseout">
      <div v-swiper:mySwiper="swoption">
          <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(item,index) in list" :key="'A'+index">
                  <img :src="item.url">
              </div>
          </div>
      </div>
    </div>
  </a>
</template>
<script>
export default {
  data () {
    return {
      swoption:{
        speed:1000,
        autoplay:{
            delay:5000   
        },
        loop: true,
        centeredSlides: true,
        // on: {
        //     slideChange() {
        //         // console.log('onSlideChangeEnd', this);
        //     }
        // },
        // pagination: {
        //     clickable:true,
        //     el: '.swiper-pagination',
        //     bulletClass:'swiper-bottom-item'
        // }
      },
      list:[
        {url:'https://ws4.sinaimg.cn/large/006tNbRwgy1fwditqwz5kj30b40b4glp.jpg'},
        {url:'https://ws3.sinaimg.cn/large/006tNbRwgy1fwcidyp4jjj30b40b40st.jpg'},
      ]
    }
  },
  components: {
  },
  methods: {
    mouseover(){

    },
    mouseout(){

    }
  },
  mounted () {
  }
}
</script>
<style src='../../assets/css/index.less' lang="less" scoped></style>