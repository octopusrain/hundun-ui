import PullRefresh from '../components/PulldownRefresh.vue'

PullRefresh.install = function(Vue, options = {}) {
  Vue.component(PullRefresh.name, PullRefresh)
}
export default PullRefresh
