export default class WebSocketClient {
  constructor (url, options) {
    this.instance = null
    this.url = url
    this.options = options || this.defaultOptions()
    if (this.options) {
      if (options.reconnectEnabled) {
        this.reconnectEnabled = options.reconnectEnabled || false
        if (this.reconnectEnabled) {
          this.reconnectInterval = options.reconnectInterval
        }
      }
      if (options.store) {
        this.store = options.store
      }
    }

    this.wsData = []

    this.onOpen = null
    this.onMessage = null
    this.onClose = null
    this.onError = null
  }

  createMessage (method, params, id) {
    let msg = {
      jsonrpc: '2.0', method: method, params: params, id: id
    }
    return JSON.stringify(msg)
  }

  defaultOptions () {
    return {
      reconnectEnabled: false,
      reconnectInterval: 0,
      store: undefined
    }
  }

  passToStore (eventName, event) {
    if (!eventName.startsWith('socket_')) { return }
    let method = 'dispatch'
    let target = eventName
    let msg = event
    if (event.data) {
      msg = JSON.parse(event.data)
    }
    this.store[method](target, msg)
  }

  connect () {
    this.instance = new WebSocket(this.url)

    this.instance.onopen = () => {
      if (typeof this.onOpen === 'function') {
        this.onOpen()
      } else if (this.store) {
        this.passToStore('socket_on_open', event)
      }
    }
    this.instance.onmessage = (msg) => {
      let data = JSON.parse(msg.data)
      if (typeof this.onMessage === 'function') {
        this.onMessage(data)
      } else if (this.store) {
        let action = this.wsData.filter(item => item.id === data.id)[0].action
        this.store.dispatch(action, data.result)
        this.passToStore('socket_on_message', data)
      }
    }
    this.instance.onclose = (e) => {
      if (typeof this.onClose === 'function') {
        this.onClose(e)
      }
      if (!e.wasClean && this.reconnectEnabled) {
        this.reconnect()
      }
    }
    this.instance.onerror = (e) => {
      if (typeof this.onError === 'function') {
        this.onError(e)
      }
    }
  }

  reconnect () {
    delete this.instance
    setTimeout(() => {
      this.connect()
    }, this.reconnectInterval)
  }

  sendObj (method, params, action = '') {
    let id = Math.floor(Math.random() * 10000) + 1
    this.wsData.push({
      id: id,
      action: action
    })
    this.instance.send(this.createMessage(method, params, id))
  }
}
