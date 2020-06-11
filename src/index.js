import Toast from './core/toast.js'
import Confirm from './core/confirm.js'
import PullRefresh from './core/pullRefresh.js'
import TextHide from './core/textHide.js'
import HDForm from './core/hdForm.js'
import HDFormItem from './core/hdFormItem.js'
import HDInput from './core/hdInput.js'
import HDSelect from './core/hdSelect.js'
import HDFixBtn from './core/hdFixBtn.js'
const components = [
  Toast,
  Confirm,
  PullRefresh,
  TextHide,
  HDForm,
  HDFormItem,
  HDInput,
  HDSelect,
  HDFixBtn,
]
const install = function(Vue, opts = {}) {
  components.forEach((component) => {
    Vue.component(component.name, component)
  })
  // TODO
  // $toast,$confirm全局引用的情况
  // some theme there
  // Vue.prototype.$HUNDUNUI = {}
}
export default {
  install,
  Toast,
  Confirm,
  PullRefresh,
  TextHide,
  HDForm,
  HDFormItem,
  HDInput,
  HDSelect,
  HDFixBtn,
}
