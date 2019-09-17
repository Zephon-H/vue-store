<template>
  <div class="check-button">
    <span class="iconfont icon-gougou"
          :class="{checked:isChecked}"></span>
  </div>
</template>

<script>

export default {
  name: 'CheckButton',
  props: {
    isChecked: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {

    }
  },
}

</script>
<style scoped>
span {
  font-size: 20px;
  border-radius: 50%;
  border: 1px solid #ddd;
  color: #fff;
}
.checked {
  background-color: #c00;
}
</style>
