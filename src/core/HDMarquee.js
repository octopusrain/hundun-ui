import HDMarquee from '../components/HDMarquee.vue'

HDMarquee.install = function(Vue, options = {}) {
  Vue.component(HDMarquee.name, HDMarquee)
}
export default HDMarquee
