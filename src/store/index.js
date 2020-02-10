import Vue from 'vue'
import Vuex from 'vuex'
import user from './user'
import test from './test'
import wsData from './wsData'

Vue.use(Vuex)

export default new Vuex.Store({

  modules: {
    user,
    test,
    wsData
  }
})
