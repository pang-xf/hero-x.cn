<template>
  <div>
    <bheads/>
    <div class="main">
      <transition name="left-fade">
        <leftWrap v-if="show"/>
      </transition>
      <div v-if="$nuxt.isOffline" class="offline">You look are offline!</div>
      <transition name="right-fade">
        <nuxt v-if="show"/>
      </transition>
    </div>
    <tips/>
    <div class="gltReturnTop" @click="returnTop" v-if="isShowReturnTop">
      <i class="iconfont">&#xe6b1;</i>
    </div>
    <bfooter v-if="!$store.state.tips.showGlTips"/>
  </div>
</template>
<script>
import bheads from '~/components/bhead'
import bfooter from '~/components/bfooter'
import leftWrap from '~/components/left_wrap'
import tips from "~/components/tips";
export default {
  components: {
    bheads,bfooter,leftWrap,tips
  },
  data(){
    return{
      bodyHeight:0,
      isShowReturnTop:false,
      show:false
    }
  },
  methods:{
    slideTo(targetPageY) {
      var timer = setInterval(function() {
        var currentY =
          document.documentElement.scrollTop || document.body.scrollTop; //当前及滑动中任意时刻位置
        var distance =
          targetPageY > currentY
            ? targetPageY - currentY
            : currentY - targetPageY; //剩余距离
        var speed = Math.ceil(distance / 10); //每时刻速度
        if (currentY == targetPageY) {
          clearInterval(timer);
        } else {
          window.scrollTo(
            0,
            targetPageY > currentY ? currentY + speed : currentY - speed
          );
        }
      }, 10);
    },
    returnTop(){
      this.slideTo(0);
    },
    handle(){
      let scrollTop =
        document.documentElement.scrollTop ||
        window.pageYOffset ||
        document.body.scrollTop;
      // 控制滚动按钮的隐藏或显示
      if (scrollTop > this.bodyHeight*0.2) {
        this.isShowReturnTop = true
      } else {
        this.isShowReturnTop = false
      }
    }
  },
  mounted () {
    let _self = this;
    setTimeout(function () {_self.show = true},300);
    const bodyHeight = document.body.clientHeight;
    this.bodyHeight = bodyHeight;
    window.addEventListener("scroll",this.handle,true);
  },
}
</script>

<style>
.main{
  width: 1000px;
  min-height: calc(100vh - 140px);
  margin:  70px auto 10px auto;
  position: relative;
}
.main>.offline{
  position: fixed;
  top: 70px;
  right: 0;
  width: 200px;
  height: 55px;
  line-height: 55px;
  text-align: center;
  background: rgba(255, 255, 255, 0.7);
  color: #000;
  z-index: 1000;
  border:1px dashed #666;
  animation: fadeInRight .8s ease-out  both;
}
.gltReturnTop{
  position: fixed;
  bottom: 160px;
  left: 50%;
  width: 40px;
  height: 40px;
  margin-left: 550px;
  z-index: 10001;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 50%;
  border:1px dashed salmon;
  animation: fadeInRight .8s ease-out  both;
}
.gltReturnTop:hover .iconfont{
  color: #175199;
}
.gltReturnTop>.iconfont{
  transition: all .5s;
  font-size: 30px;
}
</style>
