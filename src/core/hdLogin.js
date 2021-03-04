import hdLogin from '../components/hdLogin.vue'
import create from '../utils/utils.js'
export const login = (Comp = hdLogin, props, Vue) => {
  return new Promise(resolve => {
    props.onsuccess = user_info => {
      resolve(user_info)
    }
    return create(Comp, props, Vue)
  })
}
hdLogin.install = function (Vue) {
  Vue.prototype.$login = function (props) {
    return login(hdLogin, props, Vue)
  }
  Vue.component('hd-login', hdLogin)
}
export default hdLogin
