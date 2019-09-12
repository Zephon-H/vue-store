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
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
export default {
  name: 'Home',
  props: [''],
  data () {
    return {

    }
  },
  components: {
    NavBar
  }
}

</script>
<style scoped>
.home-nav {
  background-color: #c93b22;
  color: #fff;
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
  height: 78%;
  outline: none;
  /* border-radius: 100px; */
  /* width: 100%; */
}

.red {
  color: red;
}
.gray {
  color: #ccc;
}
</style>
