<template>
  <!-- 为防止wrapper类冲突，使用ref，从而通过this.$refs.refname获取到的一个指定元素对象  -->
  <div class="wrapper"
       ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'Scroll',
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      scroll: null
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      mouseWheel: true, // 如果不设置，则使用无法使用鼠标滚轮或使用后无法backTop
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad
    }),
      this.scroll.on('scroll', (position) => {
        this.$emit('scroll', position)
      }),
      this.scroll.on('pullingUp', () => {
        // 通知首页加载更多
        this.$emit('pullingUp')
      })
  },
  methods: {
    scrollTo (x, y, time = 300) {
      this.scroll.scrollTo(x, y, time)
    },
    finishPullUp () {
      this.scroll.finishPullUp()
    }
  },
}

</script>
<style scoped>
</style>
