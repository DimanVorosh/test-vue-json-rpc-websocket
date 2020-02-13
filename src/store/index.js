import Vue from 'vue'
import Vuex from 'vuex'
import test from './test'
import wsData from './wsData'

Vue.use(Vuex)

export default new Vuex.Store({

  modules: {
    test,
    wsData
  }
})
