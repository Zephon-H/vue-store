<template>
  <div id='home'>
    <nav-bar class="home-nav">
      <span slot="left"
            class="iconfont icon-menu"
            style="font-size:22px"></span>
      <div slot="center">
        <span class="red">JD</span>
        <b class='gray'>|</b>
        <span class="iconfont icon-search gray"></span>
        <input placeholder="华为平板电脑" />
      </div>
      <span slot="right"
            style="font-size=14px">登录</span>
    </nav-bar>
    <home-swiper :list='list'></home-swiper>

    <recommend-view :recommends='recommends'></recommend-view>

    <tab-control :titles="['流行','新款','精选']"
                 @tabClick="tabClick"
                 class="tab-control"></tab-control>

    <goods-list :goods="showGoods"></goods-list>
  </div>
</template>

<script>
import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'

import NavBar from 'components/common/navbar/NavBar.vue'
import TabControl from 'components/common/tabcontrol/TabControl'
import GoodsList from 'components/content/goods/GoodsList'

import { getHomeMultidata, getHomeGoods } from 'network/home.js'
import '../../lib/mui/css/mui.min.css'
import '../../lib/mui/css/icons-extra.css'

export default {
  name: 'Home',
  props: [''],
  data () {
    return {
      list: [],
      recommends: [],
      goods: {
        'pop': { page: 0, list: [] },
        'new': { page: 0, list: [] },
        'sell': { page: 0, list: [] }
      },
      currentType: 'pop'
    }
  },
  computed: {
    showGoods () {
      return this.goods[this.currentType].list
    }
  },
  created () {
    this.getHomeMultidata()
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  methods: {

    // 事件监听方法
    tabClick (index) {
      switch (index) {
        case 0:
          this.currentType = 'pop'
          break;
        case 1:
          this.currentType = 'new'
          break;
        case 2:
          this.currentType = 'sell'
          break;
        default:
          break;
      }

      console.log(index);
    },

    // 网络请求方法
    getHomeMultidata () {
      getHomeMultidata().then(res => {
        console.log(res);
        this.list = res.swiper
        this.recommends = res.recommends
      }
      )    },
    getHomeGoods (type) {
      const page = this.goods[type].page + 1
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.list)
        this.goods[type].page = page
        console.log(this.goods);
      })
    }
  },
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    TabControl,
    GoodsList
  }
}

</script>
<style scoped>
.home-nav {
  background-color: #c93b22;
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

.tab-control {
  position: sticky;
  position: -webkit-sticky;
  top: 44px;
}
</style>
