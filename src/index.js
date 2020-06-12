import HDToast, { toast } from './core/HDToast.js'
import HDConfirm, { confirm } from './core/HDConfirm.js'
import HDScrollView from './core/HDScrollView.js'
import HDTextHide from './core/HDTextHide.js'
import HDForm from './core/HDForm.js'
import HDFormItem from './core/HDFormItem.js'
import HDInput from './core/HDInput.js'
import HDSelect from './core/HDSelect.js'
import HDFixBtn from './core/HDFixBtn.js'
import HDMarquee from './core/HDMarquee.js'
import HDTips from './core/HDTips.js'
const components = [
  HDToast,
  HDConfirm,
  HDScrollView,
  HDTextHide,
  HDForm,
  HDFormItem,
  HDInput,
  HDSelect,
  HDFixBtn,
  HDMarquee,
  HDTips,
]
const install = function(Vue, opts = {}) {
  components.forEach((component) => {
    Vue.component(component.name, component)
  })
  // TODO
  // $toast,$confirm全局引用的情况
  Vue.prototype.$toast = (props) => {
    return toast(HDToast, props, Vue)
  }
  Vue.prototype.$confirm = (props) => {
    return confirm(HDConfirm, props, Vue)
  }
  // some theme there
  // Vue.prototype.$HUNDUNUI = {}
}
export default {
  install,
  HDToast,
  HDConfirm,
  HDScrollView,
  HDTextHide,
  HDForm,
  HDFormItem,
  HDInput,
  HDSelect,
  HDFixBtn,
  HDMarquee,
  HDTips,
}
