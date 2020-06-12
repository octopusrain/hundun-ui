import HDTips from '../components/HDTips.vue'

HDTips.install = function(Vue, options = {}) {
  Vue.component(HDTips.name, HDTips)
}
export default HDTips
