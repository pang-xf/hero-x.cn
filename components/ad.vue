<template>
  <div class='ad' v-if="show">
    这是一条可以关闭的通知
    <div class="close"></div>
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
  width: 100%;
  height: 40px;
  font-size: 18px;
  color: @glColor;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  position: relative;
  margin: 70px auto auto auto;
  background: @glBgColor;
  box-shadow: 0px 1px 2px #cecccc;
  .close{
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border:1px solid salmon;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    &::before{
      content: '\2715';
      padding: 2px;
    }
  }
}
</style>