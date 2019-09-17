<template>
  <div class="cart-list">
    <scroll class="
                    content"
            :probeType='3'>
      <div class="content">
        <cart-list-item v-for="(item, index) in list"
                        :key="index"
                        :item='item' />
      </div>
    </scroll>
  </div>

</template>

<script>
import CartListItem from './CartListItem'
import Scroll from 'components/common/scroll/Scroll'

export default {
  name: 'CartList',
  props: [''],
  data () {
    return {
    }
  },
  computed: {
    list () {
      return this.$store.state.cartList
    }
  },
  components: {
    CartListItem,
    Scroll
  }
}

</script>
<style scoped>
.cart-list {
  height: calc(100% - 44px - 49px - 40px);
}
.content {
  height: 100%;
  overflow: hidden;
}
</style>
