<template>
  <div>
    <div class="slider">
      <div class="my-swipe">
        <mt-swipe :auto="4000">
          <mt-swipe-item v-for="(l, index) in list"
                         :key="index"
                         class="swiper-item">

            <img :src="l"
                 class="swiper-img"
                 alt=""
                 @load="imageLoad" />
          </mt-swipe-item>
        </mt-swipe>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HomeSwiper',
  props: ['list'],
  data () {
    return {
      isLoad: false
    }
  },
  methods: {
    imageLoad () {
      if (!this.isLoad) {
        this.$emit('swiperImageLoad')
        this.isLoad = true;
      }
    }
  },
}

</script>
<style>
.slider {
  width: 375px;
  height: 375px;
  max-width: 640px;
  max-height: 640px;
  margin: 0 auto;
}

.my-swipe {
  width: 100%;
  height: 100%;
  margin: 0 auto;
}

.mint-swipe {
  width: 375px;
  height: 375px;
  transition: all 300ms ease 0s;
  transform: translate3d(0px, 0px, 0px);
  z-index: 10;
}
.mint-swipe img {
  height: 100%;
  width: 100%;
}
</style>
