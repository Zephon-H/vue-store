<template>
  <div id='bottom-bar'>
    <div>
      <span class="iconfont icon-home"></span>
      <span>客服</span>
    </div>
    <div>
      <span class="iconfont icon-home"></span>
      <span>进店</span>
    </div>
    <div>
      <span class="iconfont icon-home"></span>
      <span>购物车</span>
    </div>
    <div @click="addToCart">加入购物车</div>
    <div>立即购买</div>
  </div>
</template>

<script>

export default {
  name: 'detailBottomBar',
  props: [''],
  data () {
    return {

    }
  },
  methods: {
    addToCart () {
      this.$emit('addCart')
    }
  },
}

</script>
<style scoped>
#bottom-bar {
  height: 49px;
  line-height: 49px;
  position: relative;
  bottom: 49px;
  background-color: #fff;
  display: flex;
}
#bottom-bar div {
  flex: 1;
  text-align: center;
}
#bottom-bar div > span:nth-child(1) {
  margin-top: 10px;
}
#bottom-bar div span {
  display: block;
  font-size: 12px;
  color: #999;
  display: block;
  line-height: 20px;
}
#bottom-bar .iconfont {
  font-size: 25px;
}
#bottom-bar div:nth-child(4) {
  flex: 2;
  background: linear-gradient(138deg, #ffa600, #ffb000 77%, #ffbc00);
  color: #fff;
}
#bottom-bar div:nth-child(5) {
  flex: 2;
  background: linear-gradient(-41deg, #ff4f18, #ff2000 24%, #f10000);
  color: #fff;
}
</style>
