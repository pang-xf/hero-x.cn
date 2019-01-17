<template>
  <div class='music left_item'>
    <audio :src=music_url loop id="music" preload="auto"></audio>
    <p class="name">音乐</p>
    <div class="music_wrap">
      <div class="music_wrap_left noselect">
        <img src="https://ws1.sinaimg.cn/large/006tNc79gy1fz9m6pnclwj30b40b4dfy.jpg" alt="" class="music_album">
        <div class="music_modal"></div>
        <i class="iconfont" @click="play" v-show="!isPlay">&#xe6f6;</i>
        <i class="iconfont" @click="play" v-show="isPlay">&#xe662;</i>
      </div>
      <div class="music_wrap_right">
        <div class="music_wrap_right_line1">
          <span class="music_name">Wonderful -</span>
          <span class="music_author">逃跑计划</span>
        </div>
        <div class="music_wrap_right_line2">
          <div class="music_progress_wrap">
            <div class="music_progress"></div>
            <div class="music_progress_act" :style="{width:progress}"></div>
          </div>
          <div class="music_detail">
            <span class="">{{m_currentTime}}</span>/
            <span>{{m_duration}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      isPlay:false,
      music_url:'',
      progress:0,
      music_url:'https://xhangjia.oss-cn-shenzhen.aliyuncs.com/2018/12/change/Wonderful%20(Live%E7%89%88)%20-%20%E9%80%83%E8%B7%91%E8%AE%A1%E5%88%92.mp3',
      m_duration:'00:00',
      m_currentTime:'00:00',
    }
  },
  components: {
  },
  methods: {
    play(){
      let music = document.getElementById('music');
      if(this.isPlay){
        music.pause()
      }else{
        music.play()
      }
      this.isPlay = !this.isPlay;
    }
  },
  mounted () {
    let _self = this;
    let music = document.getElementById('music');
    music.load();
    music.oncanplay = function () {  
      let dur = music.duration,min = 0,second = 0;
      min = parseInt(dur/60);
      if(min<10){min='0'+min}
      second = Math.floor(dur%60);
      if(second<10){second='0'+second}
      _self.m_duration = min+':'+second;
    }
    music.addEventListener('timeupdate',function () {
      let  min = 0,second = 0;
      min = parseInt(this.currentTime/60);
      if(min<10){min='0'+min}
      second = Math.floor(this.currentTime%60);
      if(second<10){second='0'+second}
      _self.m_currentTime = min+':'+second;
      _self.progress = (this.currentTime/this.duration)*100 +'%';
    })
  }
}
</script>
<style src='~/assets/css/global.less' lang="less"></style>
<style src='~/assets/css/index.less' lang="less" scoped></style>