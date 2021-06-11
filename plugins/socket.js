import Vue from 'vue'
import io from 'Socket.IO-client'
Vue.prototype.$socket = io('http://127.0.0.1:5000')