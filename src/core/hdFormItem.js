import HDFormItem from '../components/HDFormItem.vue'

HDFormItem.install = function(Vue, options = {}) {
  Vue.component(HDFormItem.name, HDFormItem)
}
export default HDFormItem
