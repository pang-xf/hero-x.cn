<template>
  <div class="global" ref="global">
    <section class="container">
      <div class="content">
        <!-- <ad/> -->
        <div class="content_navbar" ref='navbar'>
          <ul>
            <li v-for="(item,index) in nav_link" :key="index" @click="changeNavBar(item)">
              <nuxt-link to="#" :class="{'active_nav_link' : active_link_index == index}">
                {{item.text}}
              </nuxt-link>
            </li>
          </ul>
        </div>
        <Card v-for="(item,index) in article" :key="index" :article="item" :id="item._id"></Card>
        <div class="article_loading" v-if="loaded">
          <div class="loader loader--style6" title="5">
            <svg
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              width="24px"
              height="30px"
              viewBox="0 0 24 30"
              style="enable-background:new 0 0 50 50;"
              xml:space="preserve"
            >
              <rect x="0" y="13" width="4" height="5" fill="#D0104C">
                <animate
                  attributeName="height"
                  attributeType="XML"
                  values="5;21;5"
                  begin="0s"
                  dur="0.6s"
                  repeatCount="indefinite"
                ></animate>
                <animate
                  attributeName="y"
                  attributeType="XML"
                  values="13; 5; 13"
                  begin="0s"
                  dur="0.6s"
                  repeatCount="indefinite"
                ></animate>
              </rect>
              <rect x="10" y="13" width="4" height="5" fill="#D0104C">
                <animate
                  attributeName="height"
                  attributeType="XML"
                  values="5;21;5"
                  begin="0.15s"
                  dur="0.6s"
                  repeatCount="indefinite"
                ></animate>
                <animate
                  attributeName="y"
                  attributeType="XML"
                  values="13; 5; 13"
                  begin="0.15s"
                  dur="0.6s"
                  repeatCount="indefinite"
                ></animate>
              </rect>
              <rect x="20" y="13" width="4" height="5" fill="#D0104C">
                <animate
                  attributeName="height"
                  attributeType="XML"
                  values="5;21;5"
                  begin="0.3s"
                  dur="0.6s"
                  repeatCount="indefinite"
                ></animate>
                <animate
                  attributeName="y"
                  attributeType="XML"
                  values="13; 5; 13"
                  begin="0.3s"
                  dur="0.6s"
                  repeatCount="indefinite"
                ></animate>
              </rect>
            </svg>
          </div>
        </div>
        <div class="article_loading" v-if="!article.length&&!loaded">
          <p class="no_more_text">暂无更多</p>
        </div>
        <!-- <div class="next_page" v-if="!loaded">下一页</div> -->
      </div>
    </section>
  </div>
</template>

<script>
import Card from "~/components/index/Card";
import swiper from "~/components/index/swiper";
import about from "~/components/index/about";
import hotArticle from "~/components/index/hotArticle";
import tags from "~/components/tags";
import music from "~/components/music";
import sentence from "~/components/sentence";
import friends from "~/components/index/friends";
import ad from "~/components/ad";
export default {
  layout: "custom",
  data() {
    return {
      article: "",
      isShowBanner: true,
      isScroll: false,
      talk: {},
      active_link_index: 0,
      nav_link: [
        {
          index: 0,
          text: "All"
        },
        {
          index: 1,
          text: "FE"
        },
        {
          index: 2,
          text: "Live"
        },
        {
          index: 3,
          text: "Wchat"
        },
        {
          index: 4,
          text: "Git"
        }
      ],
      loaded: false,
      tags: [],
      isDay: true,
    };
  },
  components: {
    Card,
    swiper,
    about,
    hotArticle,
    ad,
    friends,
    tags,
    sentence,
    music,
  },
  async asyncData({ app }) {
    let res = await app.$axios.post("/api/articlelist", {
      skip: 0,
      limit: 10
    });
    return { article: res.data.data };
  },
  methods: {
    change_day_or_night() {
      this.isDay = !this.isDay;
      if (!this.isDay) {
        document.body.classList.add("night_mode");
      } else {
        document.body.classList.remove("night_mode");
      }
    },
    changeNavBar(item) {
      let _self = this,
        key = "";
      _self.loaded = true;
      _self.active_link_index = item.index;
      switch (item.index) {
        case 0:
          key = "All";
          break;
        case 1:
          key = "前端";
          break;
        case 2:
          key = "生活";
          break;
        default:
          key = "";
          break;
      }
      if (key == "All") {
        _self.$axios
          .post("/api/articlelist", {
            skip: 0,
            limit: 10
          })
          .then(res => {
            _self.article = res.data.data;
            _self.loaded = false;
          });
      } else {
        _self.getArticle(key);
      }
    },
    getArticle(key) {
      console.log("key = " + key);
      let _self = this;
      _self.$axios
        .post("/api/findByCate", { condition: "cate", key: key })
        .then(res => {
          _self.article = res.data.data;
          _self.loaded = false;
        });
    }
  },
  mounted() {
    var _self = this;
    if (!this.isDay) {
      document.body.classList.remove("day_mode");
      document.body.classList.add("night_mode");
    } else {
      document.body.classList.add("day_mode");
      document.body.classList.remove("day_mode");
    }
    // console.log(this.article);
    // if(_self.article)
    //   _self.loaded = false;
    // _self.$axios.get('/article/getTagsAndHotArticles').then((res)=>{
    //   console.log(res.data.data);
    // })
    // _self.getArticle();
  }
};
</script>
<style src='~/assets/css/global.less' lang="less"></style>
<style src='~/assets/css/index.less' lang="less" scoped></style>
