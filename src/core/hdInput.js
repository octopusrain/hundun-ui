import hdInput from '../components/hdInput.vue'

hdInput.install = function(Vue, options = {}) {
  Vue.component(hdInput.name, hdInput)
}
export default hdInput
