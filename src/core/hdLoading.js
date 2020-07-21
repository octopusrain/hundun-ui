import hdLoading from '../components/hdLoading.vue'
import create from '../utils/utils.js'
export const showLoading = (Comp = hdLoading, props, Vue) => {
  let notice = null
  if (typeof props === 'string') {
    // 兼容用户只想传入message 字符串
    notice = create(Comp, { message: props }, Vue)
  } else {
    notice = create(Comp, props, Vue)
  }
  return notice
}
export const hideLoading = (Comp = hdLoading) => {
  Comp.remove()
}
hdLoading.install = function(Vue, options = {}) {
  // add loading
  Vue.prototype.$showLoading = (props) => {
    const notice = showLoading(hdLoading, props, Vue)
    hdLoading.notice = notice
    return notice
  }
  // hide loading
  Vue.prototype.$hideLoading = () => {
    return hideLoading(hdLoading.notice)
  }
  Vue.component('hd-loading', hdLoading)
}
export default hdLoading
