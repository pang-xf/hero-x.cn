<template>
  <div class="global">
    <section class="container">
      <!-- <leftWrap/> -->
      <div class="content">
        <!-- <ad/> -->
        <div class="content_navbar">
          <ul>
            <li v-for="(item,index) in nav_link" :key="index" @click="changeNavBar(item)"><nuxt-link to='#' :class="{'active_nav_link':active_link_index==index}">{{item.text}}</nuxt-link></li>
          </ul>
          <div class="article_mode">
            <span v-for="(mitem,mindex) in mode" :key="mindex" :class="{'active_mode_link':active_mode_index==mindex}" @click="changeMode(mitem)">{{mitem.text}}</span>
          </div>
        </div>
        <div v-if="!loaded&&active_mode_index==0">
          <mode1Card v-for="(item,index) in $store.state.articles.articles" :key="index" :article='item' :id="item._id"></mode1Card>
        </div>
        <div v-if="!loaded&&active_mode_index==1" class="mode2Card">
          <mode2Card v-for="(item,index) in $store.state.articles.articles" :key="index" :article='item' :id="item._id"></mode2Card>
        </div>
        <div class="article_loading" v-if='loaded'>
          <div class="loader loader--style6" title="5">
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
              width="24px" height="30px" viewBox="0 0 24 30" style="enable-background:new 0 0 50 50;" xml:space="preserve">
              <rect x="0" y="13" width="4" height="5" fill="#D0104C">
                <animate attributeName="height" attributeType="XML"
                  values="5;21;5" 
                  begin="0s" dur="0.6s" repeatCount="indefinite" />
                <animate attributeName="y" attributeType="XML"
                  values="13; 5; 13"
                  begin="0s" dur="0.6s" repeatCount="indefinite" />
              </rect>
              <rect x="10" y="13" width="4" height="5" fill="#D0104C">
                <animate attributeName="height" attributeType="XML"
                  values="5;21;5" 
                  begin="0.15s" dur="0.6s" repeatCount="indefinite" />
                <animate attributeName="y" attributeType="XML"
                  values="13; 5; 13"
                  begin="0.15s" dur="0.6s" repeatCount="indefinite" />
              </rect>
              <rect x="20" y="13" width="4" height="5" fill="#D0104C">
                <animate attributeName="height" attributeType="XML"
                  values="5;21;5" 
                  begin="0.3s" dur="0.6s" repeatCount="indefinite" />
                <animate attributeName="y" attributeType="XML"
                  values="13; 5; 13"
                  begin="0.3s" dur="0.6s" repeatCount="indefinite" />
              </rect>
            </svg>
          </div>
        </div>
        <div class="next_page" v-if='!loaded'>
          下一页
        </div>
      </div>
      <!-- <rightWrap/> -->
    </section>
  </div>
</template>

<script>
import mode1Card from '~/components/index/mode1_card'
import mode2Card from '~/components/index/mode2_card'
import swiper from '~/components/index/swiper'
import about from '~/components/index/about'
import hotArticle from '~/components/index/hotArticle'
import tags from '~/components/tags'
import music from '~/components/music'
import sentence from '~/components/sentence'
import friends from '~/components/index/friends'
import ad from '~/components/ad'
import leftWrap from '~/components/left_wrap'
import rightWrap from '~/components/right_wrap'
export default {
  layout: 'custom',
  data () {
    return {
      article:'',
      isShowBanner:true,
      isScroll:false,
      talk:{
        
      },
      active_link_index:0,
      active_mode_index:0,
      nav_link:[
        {
          index:0,
          text:'All'
        },
        {
          index:1,
          text:'FE'
        },
        {
          index:2,
          text:'Live'
        },
        {
          index:3,
          text:'Wchat'
        },
        {
          index:4,
          text:'Git'
        }
      ],
      loaded:true,
      mode:[
        {
          index:0,
          text:'Mode1'
        },
        {
          index:1,
          text:'Mode2'
        }
      ]
    }
  },
  components: {
    mode1Card,mode2Card,swiper,about,hotArticle,ad,friends,tags,sentence,music,leftWrap,rightWrap
  },
  methods: {
    changeNavBar(item){
      let _self = this;
      _self.loaded = true;
      _self.active_link_index = item.index;
      setTimeout(function () {
        _self.getArticle(item);
      },2000)
    },
    getArticle(item){
      let _self = this;
      _self.$store.dispatch('articles/getAllArticles').then(()=>{
        _self.loaded = false;
      })
    },
    changeMode(item){
      let _self = this;
      _self.active_mode_index = item.index;
      localStorage.setItem('herox_active_mode',item.index)
    }
  },
  mounted () {
    var _self = this
    if(localStorage.getItem('herox_active_mode')){
      this.active_mode_index = localStorage.getItem('herox_active_mode');
    }
    _self.getArticle();
  },
}
</script>
<style src='~/assets/css/global.less' lang="less"></style>
<style src='~/assets/css/index.less' lang="less" scoped></style>
