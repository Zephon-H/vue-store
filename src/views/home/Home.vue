<template>
  <div id='home'>
    <nav-bar class="home-nav">
      <span slot="left"
            class="iconfont icon-menu"
            style="font-size:22px"></span>
      <div slot="center">
        <span class="red">JD</span>
        <i class='gray'>|</i>
        <span class="iconfont icon-search gray"></span>
        <input placeholder="华为平板电脑" />
      </div>
      <span slot="right">登录</span>
    </nav-bar>

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
import NavBar from 'components/common/navbar/NavBar.vue'
import { getHomeMultidata } from 'network/home.js'



export default {
  name: 'Home',
  props: [''],
  data () {
    return {
      list: []
    }
  },
  created () {
    this.list = getHomeMultidata().then(res => {
      console.log(res);
      this.list = res;
    })
  },
  components: {
    NavBar
  }
}

</script>
<style scoped>
.home-nav {
  /* background-color: #c93b22; */
  color: #fff;
  /* display: block; */
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: 15;
}
.home-nav div {
  width: 100%;
  background-color: #fff;
  border: none;
  border-radius: 100px;
  height: 30px;
  margin-top: 7px;
  line-height: 30px;
}

.home-nav input {
  border: none;
  height: 76%;
  outline: none;
}

.red {
  color: red;
}
.gray {
  color: #ccc;
}

.slider {
  width: 100%;
  height: 9.35rem;
  overflow: hidden;
  position: relative;
}
.slider-bg {
  background-image: linear-gradient(0deg, #f1503b, #c82519 50%);
  position: absolute;
  top: 0;
  left: -25%;
  height: 7.25rem;
  width: 150%;
  border-bottom-left-radius: 100%;
  border-bottom-right-radius: 100%;
}

.my-swipe {
  width: 94%;
  margin: 0 auto;
  margin-top: 44px;
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
