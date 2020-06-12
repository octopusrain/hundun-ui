import HDScrollView from '../components/HDScrollView.vue'

HDScrollView.install = function(Vue, options = {}) {
  Vue.component(HDScrollView.name, HDScrollView)
}
export default HDScrollView
