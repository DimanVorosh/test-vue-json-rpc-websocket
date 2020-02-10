// import Vue from 'vue'
// import store from './index'

export default {

  state: {
    test: undefined
  },

  mutations: {

  },

  actions: {
    socket_on_open (state, event) {
      console.log('store works!!!!!!!!!!!!!!!!!')
    },

    socket_on_message (state, event) {
    }
  }
}
