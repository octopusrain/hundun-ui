import Confirm from './components/Confirm.vue'
import create from './utils.js'

export default {
  install(Vue,options={}){
    // add confirm
    Vue.prototype.$confirm = props => {
      return new Promise((resolve, reject) => {
        props.onconfirm = () => {
          resolve(true);
        };
        props.oncancel = () => {
          reject(false);
        };
        return create(Confirm, props,Vue);
      });
    }
  }
}