<template>
  <div class="hd-select">
    <select
      @change="handleChange"
      @focus="onFocus"
      @blur="onBlur"
      :value="value"
    >
      <slot></slot>
    </select>
    <img
      class="icon"
      src="https://yxs-web.oss-cn-beijing.aliyuncs.com/8dd6033570e74172c122d838759bdf69.png"
    />
  </div>
</template>

<script>
import emitter from '../mixins/emitter'
export default {
  name: 'HDSelect',
  model: {
    event: 'change',
  },
  mixins: [emitter],
  props: {
    value: {
      type: String,
      default: '',
    },
  },
  methods: {
    handleChange(e) {
      this.$emit('change', e.target.value)
      // 通知父元素检查
      this.dispatch('HDFormItem', 'validate', [this])
    },
    onFocus(e) {
      this.dispatch('HDForm', 'focus', [e])
    },
    onBlur(e) {
      this.dispatch('HDForm', 'blur', [e])
    },
  },
}
</script>

<style lang="scss" scoped>
.hd-select {
  position: relative;
  height: 36px;
  select {
    box-sizing: border-box;
    display: block;
    width: 100%;
    height: 36px;
    border-radius: 4px;
    border: 1px solid #9b9b9b;
    font-size: 14px;
    line-height: 20px;
    background-color: #fff;
    color: #666;
    padding-left: 12px;
  }
  .icon {
    position: absolute;
    bottom: 13px;
    right: 9px;
    width: 18px;
    display: block;
  }
}
</style>
