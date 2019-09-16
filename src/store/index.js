import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutation'
import actions from './actions'

Vue.use(Vuex)

const state = {
    cartList: []
}
const store = new Vuex.Store({
    state,
    actions,
    mutations
})

export default store