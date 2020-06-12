import HDConfirm from '../components/HDConfirm.vue'
import create from '../utils/utils.js'
export const confirm = (Comp = HDConfirm, props, Vue) => {
  return new Promise((resolve, reject) => {
    props.onconfirm = () => {
      resolve(true)
    }
    props.oncancel = () => {
      reject(false)
    }
    return create(Comp, props, Vue)
  })
}
HDConfirm.install = function(Vue, options = {}) {
  // add confirm
  Vue.prototype.$confirm = (props) => {
    return confirm(HDConfirm, props, Vue)
  }
  Vue.component(HDConfirm.name, HDConfirm)
}
export default HDConfirm
