<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav"
                    @titleClick="titleClick"
                    ref="nav" />
    <scroll class="
                    content"
            ref="scroll"
            @scroll="contentScroll"
            :probeType='3'>
      <detail-swiper :list='imgs'
                     v-if="imgs"></detail-swiper>
      <detail-base-info :goods='goods'></detail-base-info>
      <detail-comment :comment='comment'
                      ref="comment"></detail-comment>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :detailInfo='detailInfo'
                         @imgLoad="imgLoad"
                         ref="detailInfo"></detail-goods-info>
      <goods-list :goods="
                   recommend"
                  ref="recommend">
      </goods-list>
    </scroll>
    <back-top @click.native="backClick"
              v-show="isShowBackTop"></back-top>
    <detail-bottom-bar @addCart='addCart' />

  </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar'
import DetailSwiper from './childComps/DetailSwiper'
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailShopInfo from './childComps/DetailShopInfo'
import DetailGoodsInfo from './childComps/DetailGoodsInfo'
import DetailComment from './childComps/DetailComment'
import DetailBottomBar from './childComps/DetailBottomBar'

import Scroll from 'components/common/scroll/Scroll'
import GoodsList from 'components/content/goods/GoodsList'

import { getDetail, Goods, Shop, Comment, getRecommend } from 'network/detail'
import { debounce } from 'common/utils'
import { itemListenerMixin, backTopMixin } from 'common/mixin'

export default {
  name: 'Detail',
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailComment,
    GoodsList,
    DetailBottomBar,
  },

  mixins: [itemListenerMixin, backTopMixin],
  props: [''],
  data () {
    return {
      id: null,
      imgs: [],
      goods: {},
      shop: {},
      detailInfo: [],
      comment: {},
      recommend: [],
      themeTopYs: [],
      getThemeTopY: null,
      currentIndex: 0
    }
  },
  mounted () {
    // this.ItemImgListener = () => {
    //   // 刷新太过频繁的防抖动处理
    //   //   this.$refs.scroll.refresh()
    //   debounce(this.$refs.scroll.refresh, 200)
    // }
    // // 监听item中图片加载完成
    // this.$bus.$on('itemImageLoad', this.itemImgListener)
  },
  destroyed () {
    // 两种方法二选一
    this.$bus.$off('itemImageLoad', this.itemImgListener)
  },
  methods: {
    imgLoad () {
      this.newRefresh()
      this.getThemeTopY()
    },
    titleClick (index) {
      //   console.log(index);
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 100)
    },
    contentScroll (position) {
      this.isShowBackTop = (-position.y) > 500

      const positionY = -position.y
      this.themeTopYs.push(Number.MAX_VALUE)
      let length = this.themeTopYs.length
      // 内容滚动，显示对应的标题
      for (let i = 0; i < length - 1; i++) {
        // if (this.currentIndex != i && ((i < length - 1 && positionY > this.themeTopYs[i] && positionY < this.themeTopYs[i + 1] || (i === length - 1 && positionY >= this.themeTopYs[i])))) {
        // hack写法
        if (this.currentIndex !== i && (positionY > this.themeTopYs[i] && positionY < this.themeTopYs[i + 1])) {

          this.currentIndex = i;
          console.log(this.currentIndex);
          this.$refs.nav.currentIndex = this.currentIndex
        }
      }
      //   if (positionY < this.themeTopYs[1]) index = 0
      //   else if (positionY < this.themeTopYs[2]) index = 1
      //   else if (positionY < this.themeTopYs[3]) index = 2
      //   else index = 3

    },
    addCart () {
      // 获取购物车需要展示的商品信息
      const product = {}
      product.image = this.imgs[0]
      product.title = this.goods.title
      product.price = this.goods.price
      product.id = this.id

      // 将商品添加到购物车
      this.$store.dispatch('addCart', product)
      //   this.$store.commit('addCart', product)
    }
  },
  created () {
    // 保存id
    this.id = this.$route.params.id

    getDetail(this.id).then(res => {
      if (res) {
        this.imgs = res.imgs
        // console.log(res);
        this.goods = new Goods(res)
        this.shop = new Shop(res.shop)
        this.detailInfo = res.detailImage
        this.comment = new Comment(res)
        // console.log(this.comment);

        // DOM渲染完,但图片没加载完
        // this.$nextTick(() => {
        //   this.themeTopYs.push(0)
        //   this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
        //   this.themeTopYs.push(this.$refs.detailInfo.$el.offsetTop)
        //   this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
        // })

        this.getThemeTopY = debounce(() => {
          this.themeTopYs = []
          this.themeTopYs.push(0)
          this.themeTopYs.push(this.$refs.comment.$el.offsetTop - 44)
          this.themeTopYs.push(this.$refs.detailInfo.$el.offsetTop - 44)
          this.themeTopYs.push(this.$refs.recommend.$el.offsetTop - 44)
        }, 100)
      }
    })

    getRecommend().then(res => {
      this.recommend = res.list
      //   console.log(this.recommend);
    })
  },

}

</script>
<style  scoped>
#detail {
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
}
.detail-nav {
  position: relative;
  z-index: 9;
  background-color: #fff;
}
.content {
  height: calc(100% - 44px);
}
</style>
