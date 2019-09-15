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
      <span slot="right">登录</span>
    </nav-bar>
    <scroll class="content"
            ref="scroll"
            :probe-type='3'
            @scroll="contentScroll"
            :pull-up-load='true'
            @pullingUp='loadMore'>
      <home-swiper :list='list'></home-swiper>

      <recommend-view :recommends='recommends'></recommend-view>

      <tab-control :titles="['流行','新款','精选']"
                   @tabClick="tabClick"
                   class="tab-control"></tab-control>

      <goods-list :goods="showGoods"></goods-list>
    </scroll>

    <!-- 组件监听点击必须加native -->
    <back-top @click.native="backClick"
              v-show="isShow"></back-top>

  </div>
</template>

<script>
import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'

import NavBar from 'components/common/navbar/NavBar.vue'
import TabControl from 'components/common/tabcontrol/TabControl'
import GoodsList from 'components/content/goods/GoodsList'
import Scroll from 'components/common/scroll/Scroll'
import BackTop from 'components/content/backTop/BackTop'

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
      currentType: 'pop',
      isShow: false
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
    backClick () {
      console.log('ok')
      console.log(this.$refs.scroll.scroll.scrollTo);
      this.$refs.scroll.scrollTo(0, 0, 500)
    },
    contentScroll (position) {
      this.isShow = (-position.y) > 500
    },
    loadMore () {
      this.getHomeGoods(this.currentType)
      this.$refs.scroll.finishPullUp()
      this.$refs.scroll.scroll.refresh()
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
    GoodsList,
    Scroll,
    BackTop
  }
}

</script>
<style scoped>
#home {
  height: 100vh;
}
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
  /* height: 76%; */
  outline: none;
}

.home-nav span:last-child {
  font-size: 14px;
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

.content {
  margin-top: 44px;
  /* height: calc(100% - 93px); */
  height: 100%;
}
</style>
