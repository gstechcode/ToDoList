import { createApp } from 'vue'
import App from './App.vue'
import mitt from 'mitt'

const Vue= createApp(App)

const emitter= mitt()

Vue.config.globalProperties.$emitter= emitter

Vue.mount('#app')
