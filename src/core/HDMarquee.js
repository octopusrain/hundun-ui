import hdMarquee from '../components/hdMarquee.vue'

hdMarquee.install = function (Vue, options = {}) {
  Vue.component(hdMarquee.name, hdMarquee)
}
export default hdMarquee
