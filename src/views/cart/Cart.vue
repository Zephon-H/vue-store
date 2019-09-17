<template>
  <div id="cart">
    <nav-bar class="cart-nav">
      <span slot="left"
            class="iconfont icon-back"
            style="font-size:22px"></span>
      <div slot="center">
        购物车
      </div>
      <span slot="right"
            class="iconfont icon-More"></span>
    </nav-bar>
    <cart-list></cart-list>
    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import CartList from './childComps/CartList'
import CartBottomBar from './childComps/CartBottomBar'
export default {
  name: 'Cart',
  props: [''],
  data () {
    return {

    }
  },
  components: {
    NavBar,
    CartList,
    CartBottomBar
  }
}

</script>
<style scoped>
#cart {
  height: 100vh;
}
#cart .icon-More {
  font-size: 30px;
}
.cart-nav div {
  font-size: 18px;
}
</style>
