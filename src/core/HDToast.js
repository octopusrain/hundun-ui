import HDToast from '../components/HDToast.vue'
import create from '../utils/utils'
export const toast = (Comp = HDToast, props, Vue) => {
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
}
HDToast.install = function(Vue, options = {}) {
  // add toast
  Vue.prototype.$toast = (props) => {
    return toast(props, Vue)
  }
  Vue.component(HDToast.name, HDToast)
}
export default HDToast
