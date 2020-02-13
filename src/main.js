import Vue from 'vue'
import App from './App.vue'
import store from './store/index'
import JRPCWS from './ws/wsMain'

Vue.config.productionTip = false

Vue.use(JRPCWS, `ws://${document.domain}/async/`, {
  reconnectEnabled: true,
  reconnectInterval: 5000,
  recconectAttempts: 5,
  store: store
})

new Vue({
  store,
  async created () {
    this.$socket.onOpen = () => {
      this.$socket.sendObj('example', { hello: 'worldd' }, 'getHelloWorld')
      this.$socket.sendObj('example', { hello: 'worldd' }, 'getHelloWorld')
      this.$socket.sendObj('example', { hello: 'worldd' }, 'getHelloWorld')
    }
  },
  render: h => h(App)
}).$mount('#app')
