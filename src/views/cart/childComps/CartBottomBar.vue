<template>
  <div class="bottom-bar">
    <div class='left'>
      <check-button :isChecked="isSelectAll"
                    class='cb'
                    @click.native="selectAll"></check-button>
      <span>全选</span>
    </div>
    <div class="price">
      合计:{{totalPrice}}
    </div>
    <div class='space'></div>
    <div class='pay'>
      结算({{checkedLength}})
    </div>
  </div>
</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton'

export default {
  name: 'CartBottomBar',
  props: [''],
  data () {
    return {

    }
  },
  methods: {
    selectAll () {
      if (this.isSelectAll) {
        this.$store.state.cartList.forEach(item => item.checked = false)
      } else {
        this.$store.state.cartList.forEach(item => item.checked = true)
      }
    }
  },
  computed: {
    totalPrice () {
      return "￥" + this.$store.state.cartList.filter(item => {
        return item.checked
      }).reduce((preValue, item) => {
        return preValue + item.price * item.count
      }, 0)
    },
    checkedLength () {
      return this.$store.state.cartList.filter(item => item.checked).length
    },
    isSelectAll () {
      if (this.$store.state.cartList.length === 0) return false
      return !this.$store.state.cartList.find(item => !item.checked)
    }
  },
  components: {
    CheckButton
  }
}

</script>
<style scoped>
.bottom-bar {
  position: relative;
  display: flex;
  height: 40px;
  line-height: 40px;
  background-color: #fff;

  /* bottom: 40px; */
}
.left {
  display: flex;
  width: 70px;
}
.cb {
  margin-right: 5px;
  margin-left: 10px;
}
.left > span {
  margin-top: 1px;
  font-size: 15px;
}
.price {
  margin-left: 10px;
}

.space {
  flex: 1;
}
.pay {
  width: 80px;
  background: linear-gradient(-41deg, #ff4f18, #ff2000 24%, #f10000);
  color: #fff;
  font-size: 16px;
  text-align: center;
}
</style>
