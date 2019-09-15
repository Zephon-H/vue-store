<template>
  <div>

    <div class="slider">
      <div class="slider-bg"></div>
      <div class="my-swipe">
        <mt-swipe :auto="4000">
          <mt-swipe-item v-for="(l, index) in list"
                         :key="index"
                         class="swiper-item">

            <img :src="l"
                 class="swiper-img"
                 alt="">

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

    }
  }
}

</script>
<style>
.slider {
  width: 100%;
  height: 7.35rem;
  overflow: hidden;
  position: relative;
}
.slider-bg {
  background-image: linear-gradient(0deg, #f1503b, #c82519 50%);
  position: absolute;
  top: 0;
  left: -25%;
  height: 4.75rem;
  width: 150%;
  border-bottom-left-radius: 100%;
  border-bottom-right-radius: 100%;
}

.my-swipe {
  width: 94%;
  margin: 0 auto;
}

.mint-swipe {
  height: 7rem;
  width: 100%;
  border-radius: 5px;
}
.mint-swipe img {
  height: 100%;
  width: 100%;
}
</style>
