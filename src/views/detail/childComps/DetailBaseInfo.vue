<template>
  <div id="detail-base-info">
    <div class="row1">
      <div class="price">￥<em>{{goods.price}}</em></div>
      <div></div>
      <div>
        <p><span class="iconfont icon-money"></span></p>
        降价提醒
      </div>
      <div>
        <p><span class="iconfont icon-star"></span></p>
        收藏
      </div>
    </div>
    <div class="row2">
      {{goods.title}}
    </div>
    <div class="detail_gap"></div>
  </div>
</template>

<script>

export default {
  name: 'DetailBaseInfo',
  props: ['goods'],
  data () {
    return {

    }
  }
}

</script>
<style scoped>
#detail-base-info {
}
p {
  margin: 0;
}
.row1 {
  display: flex;
  height: 47px;
  margin-top: 10px;
  margin-left: 10px;
}
.row1 div {
  flex: 1;
  text-align: center;
  font-size: 10px;
  color: #999;
  padding-top: 16px;
}
.row1 div:nth-child(3),
.row1 div:nth-child(4) {
  padding-top: 5px;
}
.row1 div:nth-child(2) {
  flex: 3;
}
.row1 .price {
  font-size: 16px;
  color: #e4393c;
  font-family: arial, sans-serif;
  font-weight: 700;
  line-height: 1.3;
}
.price em {
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
}

.row2 {
  font-weight: 700;
  line-height: 24px;
  color: #333;
  font-size: 16px;
  font-family: inherit;
  margin-left: 15px;
  margin-right: 10px;
}

.detail_gap {
  padding-top: 10px;
  background: #e8e8ed;
  margin: -1px 0;
  position: relative;
  z-index: 2;
}
</style>
