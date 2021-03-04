import hdSelect from '../components/hdSelect.vue'

hdSelect.install = function (Vue, options = {}) {
  Vue.component(hdSelect.name, hdSelect)
}
export default hdSelect
