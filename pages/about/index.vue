<template>
  <div  class="global">
    <bheads/>
    <div class="about">
        <div class="about_wrap">
            <div class="about_wrap_top">
                <div class="top_left">
                    <div class="top_left_top">
                        <div class="top_left_img"><img :src="userInfo.avatar" alt="头像"></div>
                        <h3 class="user_name"><span>{{userInfo.name}}</span></h3>
                        <p class="user_eng_name">{{userInfo.desc}}</p>
                        <p class="user_job">{{userInfo.job}}</p>
                        <p class="user_com">@{{userInfo.workExe[0].name}}</p>
                    </div>
                    <div class="top_left_center">
                        <p class="user_email"><i class="iconfont">&#xe6b9;</i>{{userInfo.email}}</p>
                        <p class="user_address"><i class="iconfont">&#xe660;</i>Lived In <span>{{userInfo.address}}</span></p>
                    </div>
                    <div class="top_left_bottom">
                        <span><i class="iconfont">&#xe616;</i></span>
                        <span><i class="iconfont">&#xe603;</i></span>
                        <span><i class="iconfont">&#xe7ab;</i></span>
                        <span><i class="iconfont">&#xe605;</i></span>
                    </div>
                </div>
                <div class="top_right">
                    <div class="top_right_top">
                        <h3 class="user_school"><span>{{userInfo.school}}</span></h3>
                        <p class="user_school">攀枝花学院</p>
                        <h3 class="user_professional"><span>{{userInfo.professional}}</span></h3>
                        <p class="user_professional">数学与计算机学院</p>
                        <p class="user_date">{{userInfo.schoolTime}}</p>
                    </div>
                    <div class="top_right_bottom">
                        <h3><span>技术栈</span></h3>
                        <p>
                            <i class="iconfont">&#xe74a;</i>
                            <i class="iconfont">&#xe71d;</i>
                            <i class="iconfont">&#xe61c;</i>
                            <i class="iconfont">&#xe60a;</i>
                        </p>
                        <p>
                            <i class="iconfont">&#xea08;</i>
                            <i class="iconfont">&#xe60b;</i>
                            <i class="iconfont">&#xe678;</i>
                            <i class="iconfont">&#xe609;</i>
                        </p>
                    </div>
                </div>
            </div>
            <div class="about_wrap_center">
                <!-- <h2>项目</h2> -->
                <div id="map">
                    
                </div>
            </div>
            <div class="about_wrap_bottom">
                <h2>声明</h2>
                <div class="about_wrap_bottom_text">
                    <p>1.本站所有文章均为本人原创，仅代表个人在撰文时刻的观点和想法;</p>
                    <p>2.内容转载请保留署名 李宇童鞋丶或指向该原文(https://herox.cn)的链接，请勿用于商业用途;</p>
                    <p>3.关于页样式参考-> <a href="https://littlewin.wang/about" target="_blank">littlewin</a> </p>
                </div>
            </div>
        </div>
    </div>
    <bfooter/>
  </div>
</template>
<script>
import bheads from '~/components/bhead'
import bfooter from '~/components/bfooter'
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
        list:[
            {url:'https://ws1.sinaimg.cn/large/006tNbRwgy1fyi06d6oc7j31hc0u0dto.jpg'},
            {url:'https://ws3.sinaimg.cn/large/006tNbRwgy1fxy772sdsdj318g0p0npe.jpg'},
            {url:'https://ws1.sinaimg.cn/large/006tNbRwgy1fyi06d6oc7j31hc0u0dto.jpg'},
            {url:'https://ws3.sinaimg.cn/large/006tNbRwgy1fwcidyp4jjj30b40b40st.jpg'},
            {url:'https://ws4.sinaimg.cn/large/006tNbRwgy1fwditqwz5kj30b40b4glp.jpg'},
            {url:'https://ws3.sinaimg.cn/large/006tNbRwgy1fwcidyp4jjj30b40b40st.jpg'},
            {url:'https://ws4.sinaimg.cn/large/006tNbRwgy1fwditqwz5kj30b40b4glp.jpg'},
            {url:'https://ws3.sinaimg.cn/large/006tNbRwgy1fwcidyp4jjj30b40b40st.jpg'},
        ]
    }
  },
  async asyncData ({app,route}) {
    let res  = await app.$axios.$get('/user/getUserInfo')
    return { userInfo: res.data}
  },
  components: {
    bfooter,bheads
  },
  methods: {
    handleScroll(){
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop,_self = this
      if(scrollTop>170){
          _self.isScroll = true
      }else{
          _self.isScroll = false
      }
    },
    initMap(){
      var map = new AMap.Map('map', {
        resizeEnable: true,
        center:[113.937245,22.545176],
        zoom:14,
        zoomEnable:false
      });
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll);
    this.initMap();
  }
}
</script>
<style src='~/assets/css/about.less' lang="less"></style>