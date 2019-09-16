import { debounce } from './utils'
export const itemListenerMixin = {
    data () {
        return {
            itemImgListener: null,
            newRefresh: null
        }
    },
    mounted () {
        this.newRefresh = debounce(this.$refs.scroll.refresh, 100)
        this.itemImgListener = () => {
            // 刷新太过频繁的防抖动处理
            //   this.$refs.scroll.refresh()
            this.newRefresh()
        }
        // 监听item中图片加载完成
        this.$bus.$on('itemImageLoad', this.itemImgListener)
        console.log('mix');
    },
}
import BackTop from 'components/content/backTop/BackTop'
export const backTopMixin = {
    components: {
        BackTop
    },
    data () {
        return {
            isShowBackTop: false,
        }
    },
    methods: {
        backClick () {
            this.$refs.scroll.scrollTo(0, 0, 300)
        },
        listenShowBackTop (position) {
            this.isShowBackTop = -position.y > BACK_POSITION
        }
    }
}