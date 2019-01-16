import VScrollLoadbar from './components/V-Scroll-Loadbar.vue'

const vScrollLoadbarPlugin = {
  install (Vue) {
    Vue.component(VScrollLoadbar.name, VScrollLoadbar)
  }
}
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(vScrollLoadbarPlugin)
}

export default vScrollLoadbarPlugin
