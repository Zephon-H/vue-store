<template>
  <div>
    <div class="detailInfo">
      <img :src="item"
           alt=""
           v-for="(item, index) in detailInfo"
           :key="index"
           @load="imgLoad">
    </div>
  </div>
</template>

<script>

export default {
  name: 'DetailGoodsInfo',
  props: ['detailInfo'],
  data () {
    return {
      counter: 0,
      imageLength: 0
    }
  },
  methods: {
    imgLoad () {
      // 判断所有图片加载完
      if (++this.counter === this.imageLength) {
        this.$emit('imgLoad')
      }
    }
  },
  watch: {
    detailInfo () {
      this.imageLength = this.detailInfo.length
    }
  }
}

</script>
<style scoped>
.detailInfo {
  width: 375px;
}
.detailInfo img {
  width: 100%;
  margin: 0;
  padding: 0;
  border: none;
}
</style>
