<template>
  <div class="goods">
    <goods-list-item v-for="(item, index) in goods"
                     :key="index"
                     :goodsItem=item
                     class="goods-item"></goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem'
export default {
  name: 'GoodsList',
  props: {
    goods: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {

    }
  },

  components: {
    GoodsListItem
  }

}

</script>
<style scoped>
.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  background-color: #fff;
}
.goods-item {
  flex-wrap: wrap;
  width: calc(50% - 2%);
}
</style>
