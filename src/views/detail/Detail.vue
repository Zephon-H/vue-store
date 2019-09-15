<template>
  <div id="detail">
    <detail-nav-bar />
    <detail-swiper :list='imgs'></detail-swiper>
  </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar'
import DetailSwiper from './childComps/DetailSwiper'

import { getDetail } from 'network/detail'

export default {
  name: 'Detail',
  components: {
    DetailNavBar,
    DetailSwiper
  },
  props: [''],
  data () {
    return {
      id: null,
      imgs: []
    }
  },
  created () {
    // 保存id
    this.id = this.$route.params.id

    getDetail(this.id).then(res => {
      this.imgs = res.imgs
      console.log(res);
    })

  },

}

</script>
<style  scoped>
</style>
