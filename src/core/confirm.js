import Confirm from '../components/Confirm.vue'
import create from '../utils/utils.js'

Confirm.install = function(Vue, options = {}) {
  // add confirm
  Vue.prototype.$confirm = (props) => {
    return new Promise((resolve, reject) => {
      props.onconfirm = () => {
        resolve(true)
      }
      props.oncancel = () => {
        reject(false)
      }
      return create(Confirm, props, Vue)
    })
  }
  Vue.component(Confirm.name, Confirm)
}
export default Confirm
