import hdFormItem from '../components/hdFormItem.vue'

hdFormItem.install = function(Vue, options = {}) {
  Vue.component(hdFormItem.name, hdFormItem)
}
export default hdFormItem
