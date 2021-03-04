import hdToast, {toast} from './core/hdToast.js'
import hdConfirm, {confirm} from './core/hdConfirm.js'
import hdScrollView from './core/hdScrollView.js'
import hdTextHide from './core/hdTextHide.js'
import hdForm from './core/hdForm.js'
import hdFormItem from './core/hdFormItem.js'
import hdInput from './core/hdInput.js'
import hdSelect from './core/hdSelect.js'
import hdFixBtn from './core/hdFixBtn.js'
import hdMarquee from './core/hdMarquee.js'
import hdTips from './core/hdTips.js'
import hdLoading, {showLoading, hideLoading} from './core/hdLoading.js'
import hdLogin, {login} from './core/hdLogin.js'
const components = [
  hdToast,
  hdConfirm,
  hdScrollView,
  hdTextHide,
  hdForm,
  hdFormItem,
  hdInput,
  hdSelect,
  hdFixBtn,
  hdMarquee,
  hdTips,
  hdLoading,
  hdLogin,
]
const install = function (Vue, opts = {}) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
  // TODO
  // $toast,$confirm全局引用的情况
  Vue.prototype.$toast = props => {
    return toast(hdToast, props, Vue)
  }
  Vue.prototype.$confirm = props => {
    return confirm(hdConfirm, props, Vue)
  }
  // add loading
  Vue.prototype.$showLoading = props => {
    const notice = showLoading(hdLoading, props, Vue)
    hdLoading.notice = notice
    return notice
  }
  // hide loading
  Vue.prototype.$hideLoading = () => {
    return hideLoading(hdLoading.notice)
  }
  // add login
  Vue.prototype.$login = function (props) {
    return login(hdLogin, props, Vue)
  }
  // some theme there
  // Vue.prototype.$HUNDUNUI = {}
}
export default {
  install,
  hdToast,
  hdConfirm,
  hdScrollView,
  hdTextHide,
  hdForm,
  hdFormItem,
  hdInput,
  hdSelect,
  hdFixBtn,
  hdMarquee,
  hdTips,
  hdLoading,
  hdLogin,
}
