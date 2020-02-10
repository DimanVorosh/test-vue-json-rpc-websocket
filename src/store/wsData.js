export default {

  state: {
    data: []
  },

  mutations: {
    setData (state, data) {
      state.data.push(data)
    }
  },

  actions: {
    getHelloWorld ({ commit }, data) {
      commit('setData', data)
    }
  }
}
