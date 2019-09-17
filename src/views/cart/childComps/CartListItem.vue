<template>
  <div id="cart-list-item">
    <div class="item-selector">
      <check-button :isChecked="item.checked"
                    @click.native='checkClick'></check-button>
    </div>
    <div class="item-img">
      <img :src="item.image"
           alt="商品图片">
    </div>
    <div class="item-info">
      <div class="item-title">{{item.title}}</div>
      <div>
        <div class="item-price">￥{{item.price}}</div>
        <div></div>
        <div class="item-count">x{{item.count}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton'
export default {
  name: 'CartListItem',
  props: ['item'],
  data () {
    return {

    }
  },
  components: {
    CheckButton
  },
  methods: {
    checkClick () {
      this.item.checked = !this.item.checked
    }
  },
}

</script>
<style scoped>
#cart-list-item {
  display: flex;
  padding: 10px;
  background-color: #fff;
  height: 120px;
  border-bottom: 1px solid #ddd;
}
.item-selector {
  height: 120px;
  line-height: 100px;
  width: 30px;
  text-align: center;
  /* display: flex; */
  justify-content: center;
  align-items: center;
}
.item-img {
  flex: 3;
}
.item-img img {
  width: 100%;
  height: 100%;
}
.item-info {
  flex: 6;
  margin-left: 10px;
}
.item-title {
  box-sizing: border-box;
  height: 32px;
  font-size: 13px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-break: break-word;
  color: #232326;
  margin-top: 5px;
  line-height: 16px;
  margin-bottom: 3px;
  padding: 0 4px;
}
.item-info > div {
  display: flex;
  margin-top: 15px;
}
.item-info > div > div:nth-child(2) {
  flex: 1;
}
.item-price {
  color: #f23030;
}
</style>
