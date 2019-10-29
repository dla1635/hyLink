import Vue from 'vue'
import Vuex from 'vuex'
import { Mutations } from './mutations.js'
import { Actions } from './actions.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: null,
    isLogin: false,
    isLoginerror: false
  },
  mutations: Object.assign({}, Mutations),
  actions: Object.assign({}, Actions),
})
