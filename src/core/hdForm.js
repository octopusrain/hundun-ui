import hdForm from '../components/hdForm.vue'

hdForm.install = function (Vue, options = {}) {
  Vue.component(hdForm.name, hdForm)
}
export default hdForm
