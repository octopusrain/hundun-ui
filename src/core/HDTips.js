import hdTips from '../components/hdTips.vue'

hdTips.install = function(Vue, options = {}) {
  Vue.component(hdTips.name, hdTips)
}
export default hdTips
