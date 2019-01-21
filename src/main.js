import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import ScrollLoader from './plugin-entry'

Vue.config.productionTip = false

Vue.prototype.$axios = axios

Vue.use(ScrollLoader)

new Vue({
  render: h => h(App)
}).$mount('#app')
