import hdToast from '../components/hdToast.vue'
import create from '../utils/utils.js'
export const toast = (Comp = hdToast, props, Vue) => {
  let notice = null
  if (typeof props === 'string') {
    // 兼容用户只想传入message 字符串
    notice = create(Comp, { message: props }, Vue)
  } else {
    notice = create(Comp, props, Vue)
  }
  // 移除
  setTimeout(() => {
    notice.remove()
  }, props.duration || 2000)
  return notice
}
hdToast.install = function(Vue, options = {}) {
  // add toast
  Vue.prototype.$toast = (props) => {
    return toast(hdToast, props, Vue)
  }
  Vue.component(hdToast.name, hdToast)
}
export default hdToast
