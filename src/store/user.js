import userAPI from '@/api/user'

export default {

  state: {
    users: undefined,
    current: undefined
  },

  mutations: {
    setUsers (state, users) {
      state.users = users.reverse()
    },
    setUser (state, user) {
      state.current = user
    }
  },

  actions: {
    async login ({ commit }, credentials) {
      await userAPI.login(credentials)
    },

    async register ({ commit }, credentials) {
      await userAPI.register(credentials)
    },

    async logout ({ commit }) {
      await userAPI.logout()
      commit('setUser', undefined)
    },

    async getUsers ({ commit }) {
      const users = await userAPI.getUsers()
      commit('setUsers', users)
    },

    async getCurrentUser ({ commit }) {
      const user = await userAPI.getCurrentUser()
      if (user !== 401 && 502) {
        commit('setUser', user)
      }
    }
  }
}
