<template>
  <div>
    <nav-bar>
      <span slot="left"
            class="iconfont icon-back size"
            @click="backClick"></span>
      <div slot="center"
           class="title">
        <div v-for="(item, index) in titles"
             :key="index"
             class="title-item"
             :class="{active:index==currentIndex}"
             @click="titleClick(index)">
          {{item}}
        </div>
      </div>
      <span slot="right"
            class="iconfont icon-More moresize"></span>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

export default {
  name: 'DetailNavBar',
  components: {
    NavBar
  },
  props: [''],
  data () {
    return {
      titles: ['商品', '评价', '详情', '推荐'],
      currentIndex: 0
    }
  },
  methods: {
    titleClick (index) {
      this.currentIndex = index
      this.$emit('titleClick', index)
      //   console.log(index);
    },
    backClick () {
      this.$router.go(-1);
    }
  },

}

</script>
<style  scoped>
.title {
  display: flex;
  margin: 0 40px;
}
.size {
  font-size: 20px;
}
.moresize {
  font-size: 28px;
}
.title-item {
  text-align: center;
  flex: 1;
  font-size: 14px;
  color: #252525;
}
.active {
  color: #e4393c;
}
</style>
