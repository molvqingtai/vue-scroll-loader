import Vue from 'vue'
import App from './App.vue'
import ScrollLoader from './plugin-entry'

Vue.config.productionTip = false

Vue.use(ScrollLoader)

new Vue({
  render: h => h(App)
}).$mount('#app')
