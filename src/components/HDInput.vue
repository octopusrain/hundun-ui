<template>
  <div class="hd-input">
    <input
      :type="type"
      :value="value"
      @input="onInput"
      @focus="onFocus"
      @blur="onBlur"
      v-bind="$attrs"
    />
  </div>
</template>

<script>
import emitter from '../mixins/emitter'
export default {
  name: 'HDInput',
  inject: ['form'],
  mixins: [emitter],
  inheritAttrs: false,
  props: {
    type: {
      type: String,
      default: 'text',
    },
    value: {
      type: String,
      default: '',
    },
  },
  methods: {
    onInput(e) {
      this.$emit('input', e.target.value)
      // 通知父元素校验
      //this.$parent.$emit('validate')
      // 不直接用$parent，防止用户在中间加一层dom,就拿不到父组件
      // 用dispatch方法向上冒泡查找满足条件的对应的componentName
      this.dispatch('HDFormItem', 'validate', [this])
    },
    onFocus(e) {
      this.dispatch('HDForm', 'focus', [e])
    },
    onBlur(e) {
      this.dispatch('HDForm', 'blur', [e])
    },
  },
  mounted() {},
}
</script>

<style scoped>
.hd-input input {
  box-sizing: border-box;
  display: block;
  width: 100%;
  height: 36px;
  border-radius: 4px;
  border: 1px solid rgb(155, 155, 155);
  padding: 8px 11px;
  font-size: 14px;
  color: #666;
  line-height: 20px;
  outline: none;
  background: #fff !important;
}
</style>
