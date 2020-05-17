import Toast from './components/Toast.vue'
import create from './utils'
const toast = (props,Vue) => {
  let notice = null;
  if (typeof props === "string") {
    // 兼容用户只想传入message 字符串
    notice = create(Toast, { message: props },Vue);
  } else {
    notice = create(Toast, props,Vue);
  }
  // 移除
  setTimeout(() => {
    notice.remove();
  }, props.duration || 2000);
};
export default {
  install(Vue,options={}){
    // add toast
    Vue.prototype.$toast = props => {
      return toast(props,Vue);
    }
  }
}