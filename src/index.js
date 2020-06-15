import hdToast, { toast } from './core/hdToast.js'
import hdConfirm, { confirm } from './core/hdConfirm.js'
import hdScrollView from './core/hdScrollView.js'
import hdTextHide from './core/hdTextHide.js'
import hdForm from './core/hdForm.js'
import hdFormItem from './core/hdFormItem.js'
import hdInput from './core/hdInput.js'
import hdSelect from './core/hdSelect.js'
import hdFixBtn from './core/hdFixBtn.js'
import hdMarquee from './core/hdMarquee.js'
import hdTips from './core/hdTips.js'
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
]
const install = function(Vue, opts = {}) {
  components.forEach((component) => {
    Vue.component(component.name, component)
  })
  // TODO
  // $toast,$confirm全局引用的情况
  Vue.prototype.$toast = (props) => {
    return toast(hdToast, props, Vue)
  }
  Vue.prototype.$confirm = (props) => {
    return confirm(hdConfirm, props, Vue)
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
}
