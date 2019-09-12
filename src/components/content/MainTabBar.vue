<template>
  <tab-bar>
    <tab-bar-item link="/home">
      <span slot="item-icon"
            class="iconfont icon-home"></span>
      <span slot="item-icon-active"
            class="iconfont icon-home active"></span>
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item link="/category">
      <span slot="item-icon"
            class="iconfont icon-icon-category"></span>
      <span slot="item-icon-active"
            class="iconfont icon-icon-category active"></span>
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item link="/cart">
      <span slot="item-icon"
            class="iconfont icon-cart"></span>
      <span slot="item-icon-active"
            class="iconfont icon-cart active"></span>
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item link="/profile">
      <span slot="item-icon"
            class="iconfont icon-user"></span>
      <span slot="item-icon-active"
            class="iconfont icon-user active"></span>
      <div slot="item-text">未登录</div>
    </tab-bar-item>

  </tab-bar>
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar'
import TabBarItem from 'components/common/tabbar/TabBarItem.vue'
export default {
  name: 'MainTabBar',
  props: [''],
  data () {
    return {

    }
  },
  methods: {},
  components: {
    TabBar,
    TabBarItem
  }

}

</script>
<style>
@import "~assets/css/font-icon/iconfont.css";
.active {
  color: red;
}
</style>
