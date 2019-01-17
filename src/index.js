import VScrollLoader from './components/V-Scroll-Loader.vue'

const VScrollLoaderPlugin = {
  install (vue, option) {
    vue.component(VScrollLoader.name, VScrollLoader)
  }
}
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VScrollLoaderPlugin)
}

export default VScrollLoaderPlugin
