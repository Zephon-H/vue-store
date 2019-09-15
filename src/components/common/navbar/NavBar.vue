<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>

export default {
  name: 'NavBar',
  props: [''],
  data () {
    return {

    }
  },

  components: {},


}

</script>
<style>
.nav-bar {
  display: flex;
  height: 44px;
  line-height: 44px;
}
.left,
.right {
  width: 50px;
  text-align: center;
}
.center {
  flex: 1;
  text-align: center;
}
</style>
