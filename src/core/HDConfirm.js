import hdConfirm from '../components/hdConfirm.vue'
import create from '../utils/utils.js'
export const confirm = (Comp = hdConfirm, props, Vue) => {
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
hdConfirm.install = function (Vue, options = {}) {
  // add confirm
  Vue.prototype.$confirm = props => {
    return confirm(hdConfirm, props, Vue)
  }
  Vue.component(hdConfirm.name, hdConfirm)
}
export default hdConfirm
