import Vue from 'vue'
import App from './App.vue'
import router from './router/index'

// 除tabbar、navbar外组件使用mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

import { Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);


Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    router
}).$mount('#app')
