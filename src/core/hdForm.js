import HDForm from '../components/HDForm.vue'

HDForm.install = function(Vue, options = {}) {
  Vue.component(HDForm.name, HDForm)
}
export default HDForm
