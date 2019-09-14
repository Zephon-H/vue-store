<template>
  <div class='goods-list-item'>
    <div>
      <img :src="goodsItem.img"
           alt="">
      <div>
        <p>{{goodsItem.title}}</p>
        <span class="price">￥{{goodsItem.price}}</span>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'GoodsListItem',
  props: ['goodsItem'],
  data () {
    return {

    }
  },

  components: {},

  computed: {},

  beforeMount () { },

  mounted () { },

  methods: {},

  watch: {}

}

</script>
<style  scoped>
.goods-list-item {
  width: 49%;
  /* float: left; */
  padding-bottom: 4px;
  padding-left: 4px;
  padding-right: 4px;
}

.goods-list-item:nth-child(odd) {
  padding-right: 2px;
}
.goods-list-item:nth-child(2n) {
  padding-left: 2px;
}
.goods-list-item img {
  width: 100%;
}
.goods-list-item > div {
  background-color: #fff;
}
.goods-list-item p {
  height: 31px;
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
.goods-list-item span {
  color: #f23030;
  display: inline-block;
  padding: 0 5px 0 4px;
  position: relative;
  top: 1px;
  height: 25px;
  line-height: 25px;
}
</style>
