<template>
  <div class='ad' v-show="$store.state.tips.showAd">
    这个世界需要英雄
    <div class="close" @click="$store.commit('tips/SET_SHOWAD',false)"></div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      show:true
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
<style lang='less' scoped>
@import url(../assets/css/global.less);
.ad{
  max-width: 960px;
  width: 97.5%;
  height: 40px;
  font-size: 18px;
  letter-spacing: 10px;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  position: relative;
  margin: 0px auto 10px auto;
  background: #fff;
  transform:skew(-20deg);
}
</style>