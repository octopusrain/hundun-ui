import hdScrollView from '../components/hdScrollView.vue'

hdScrollView.install = function (Vue, options = {}) {
  Vue.component(hdScrollView.name, hdScrollView)
}
export default hdScrollView
