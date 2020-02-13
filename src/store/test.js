// import store from './index'

export default {

  state: {
    socket: {
      isConnected: false,
      reconnectError: false
    }
  },

  mutations: {

  },

  actions: {
    socket_on_open (state, event) {
      state.socket.isConnected = true
      console.log('Socket connected')
    },

    socket_on_close (state, event) {
      console.error('Code: ' + event.code + ' reason: ' + event.reason)
    },

    socket_on_error (state, event) {
      console.error('Socket closed')
    },

    socket_on_message (state, message) {
    },

    socket_reconnect (state, count) {
      // console.info(state, count)
    },

    socket_reconnect_error (state) {
      // console.error('Socket disconnected')
    }
  }
}
