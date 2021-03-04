<template>
  <div id="minirefresh" class="minirefresh-wrap hd-page-wrap">
    <div class="minirefresh-scroll">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import minirefreshTools from 'minirefresh/dist/minirefresh.min.js'
import 'minirefresh/dist/minirefresh.min.css'
export default {
  name: 'hdScrollView',
  props: {
    hideScrollBar: {
      type: Boolean,
      default: false,
    },
    down: {
      type: Object,
      default: () => {
        return {
          isLock: false,
          offset: 75,
          bounceTime: 300,
          contentdown: '下拉刷新', // 下拉刷新默认提示
          contentover: '释放刷新', // 在超过阈值后的提示
          contentrefresh: '加载中...', // 正在刷新中的提示
          contentsuccess: '刷新成功', // 刷新成功后，结束前，成功状态的提示
        }
      },
    },
    up: {
      type: Object,
      default: () => {
        return {
          isLock: false,
          offset: 75,
          isFinishUp: false, // 是否数据全部加载完成
          contentdown: '上拉显示更多', // 上拉默认提示
          contentrefresh: '加载中...', // 正在加载中的提示
          contentnomore: '没有更多数据了', // 没有更多数据时的提示
        }
      },
    },
  },
  computed: {
    isFinishUp() {
      return this.up.isFinishUp
    },
  },
  methods: {
    openMinifresh() {
      var _this = this
      var miniRefresh = null
      var down = Object.assign(this.down, {
        callback: () => {
          this.$emit('onpulldown', miniRefresh)
        },
      })
      var up = Object.assign(this.up, {
        onScroll: scrollTop => {
          this.$emit('onscroll', scrollTop)
        },
        callback: () => {
          setTimeout(() => {
            this.$emit('onpullup', miniRefresh)
          }, 600)
          //上拉事件
          //注意，由于默认情况是开启满屏自动加载的，所以请求失败时，请务必endUpLoading(true)，防止无限请求
        },
      })
      miniRefresh = new MiniRefresh({
        container: '#minirefresh',
        down,
        up,
        isScrollBar: _this.hideScrollBar,
      })
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.openMinifresh()
    })
  },
}
</script>
