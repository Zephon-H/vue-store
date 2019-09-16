<template>
  <div id="shopInfo">
    <div>
      <div class="row1">
        <img :src="shop.logo"
             alt="">
        <div>{{shop.name}}</div>
      </div>
      <div class="row2">
        <div class="col1">
          <p>{{shop.shopFansNum}}</p>
          <p>粉丝人数</p>
        </div>
        <div class="col2">
          <p>{{shop.goodsNum}}</p>
          <p>全部商品</p>
        </div>
        <div class="col3">
          <p>评价 <span :class='{red:isBetters[0]}'>{{shop.userEvaluateScore}}</span></p>
          <p>物流 <span :class='{red:isBetters[1]}'>{{shop.logisticsLvyueScore}}</span></p>
          <p>售后 <span :class='{red:isBetters[2]}'>{{shop.afterServiceScore}}</span></p>
        </div>
        <div></div>
      </div>
      <div class="row3">
        <button>关注店铺</button>
        <button>进入店铺</button>
      </div>
    </div>
    <div class="detail_gap"></div>
  </div>

</template>

<script>

export default {
  name: 'DetailShopInfo',
  props: ['shop'],
  data () {
    return {
      isBetters: []
    }
  },
  mounted () {
    this.isBetters[0] = this.shop.userEvaluateScore > 9
    this.isBetters[1] = this.shop.logisticsLvyueScore > 9
    this.isBetters[2] = this.shop.afterServiceScore > 9
    // console.log(this.shop);

    // console.log(this.shop.userEvaluateScore, this.shop.logisticsLvyueScore, this.shop.afterServiceScore);
    // console.log(this.isBetters)
  },
  watch: {
    shop (newShop, prevShop) {
      this.isBetters[0] = this.shop.userEvaluateScore > 9
      this.isBetters[1] = this.shop.logisticsLvyueScore > 9
      this.isBetters[2] = this.shop.afterServiceScore > 9
    }
  }
}

</script>
<style  scoped>
#shopInfo {
  background-color: #fff;
}
#shopInfo > div:nth-child(1) {
  padding: 10px;
}
p {
  margin: 0;
  padding: 0;
}
.row1 {
  display: flex;
  height: 34px;
}
.row1 div {
  font-size: 14px;
  color: #333;
  margin-left: 10px;
  line-height: 34px;
  height: 34px;
}
.row1 img {
  height: 30px;
  width: 90px;
  border: 1px solid #ddd;
}

.row2 {
  display: flex;
  height: 54px;
  margin-top: 10px;
}
.col1 {
  padding-top: 2px;
  flex: 1;
  text-align: center;
  border-right: 1px solid #ddd;
}
.col2 {
  flex: 1;
  text-align: center;
  padding-top: 2px;
}
.col3 {
  flex: 1;
  text-align: right;
  margin-right: 15px;
}
.col3 p span {
  color: #18c461;
}

.row3 {
  margin-top: 10px;
  display: flex;
}
.row3 button {
  display: block;
  background-color: #fff;
  border: 1px solid #ddd;
  flex: 1;
  height: 30px;
}
.row3 button:nth-child(2) {
  margin-left: 10px;
  flex: 1;
}
.detail_gap {
  padding-top: 10px;
  background: #e8e8ed;
  margin: -1px 0;
  position: relative;
  /* z-index: 2; */
}
.col3 .red {
  color: #c00;
}
</style>
