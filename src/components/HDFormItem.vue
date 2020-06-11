<template>
  <div class="hd-input-item">
    <label class="hd-label" v-if="label">{{ label }}<span>*</span></label>
    <slot></slot>
    <p class="msg" v-if="errorMsg">{{ errorMsg }}</p>
  </div>
</template>

<script>
import Schema from 'async-validator'
export default {
  inject: ['form'],
  name: 'HDFormItem',
  componentName: 'HDFormItem',
  props: {
    label: {
      type: String,
      default: '',
    },
    prop: {
      type: String,
    },
  },
  data() {
    return {
      errorMsg: '',
    }
  },
  methods: {
    validate() {
      // 检验规则
      const rules = this.form.rules[this.prop]
      // 检验值
      const value = this.form.model[this.prop]
      const desc = { [this.prop]: rules }
      const schema = new Schema(desc)
      return schema.validate({ [this.prop]: value }, (error) => {
        if (error) {
          this.errorMsg = error[0].message
        } else {
          this.errorMsg = ''
        }
      })
    },
  },
  mounted() {
    this.$on('validate', () => {
      this.validate()
    })
  },
}
</script>

<style lang="scss" scoped>
.hd-input-item {
  width: 100%;
  position: relative;
  padding-bottom: 20px;
  .hd-label {
    display: block;
    box-sizing: border-box;
    font-size: 15px;
    color: rgb(74, 74, 74);
    line-height: 21px;
    padding-bottom: 7px;
    span {
      color: rgb(226, 63, 63);
      padding-left: 6px;
      line-height: 21px;
    }
    a {
      font-size: 11.5px;
      color: rgb(155, 155, 155);
      padding-left: 6px;
      &.change {
        color: rgb(143, 167, 246);
        text-decoration: underline;
      }
    }
  }
  .msg {
    width: 100%;
    height: 20px;
    line-height: 20px;
    position: absolute;
    bottom: 0;
    left: 0;
    font-size: 10px;
    color: #d7ab70;
  }
}
</style>
