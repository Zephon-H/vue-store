<template>
  <div class="tab-bar-item"
       @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>

    <div :class="{active:isActive}"
         :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>
<script>

export default {
  name: 'TabBarItem',
  data () {
    return {
    }
  },
  computed: {
    isActive () {
      return this.$route.path.indexOf(this.link) !== -1
    },
    activeStyle () {
      return this.isActive ? { color: this.activeColor } : {}
    }
  },
  props: {
    link: String,
    activeColor: {
      type: String,
      default: 'red'
    }
  },
  methods: {
    itemClick () {
      this.$router.push(this.link)
    }
  },
}

</script>
<style>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  /* line-height: 49px; */
  font-size: 14px;
}
.tab-bar-item span {
  font-size: 24px;
  display: block;
}
</style>
