<template>
  <div class="hd-form">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'HDForm',
  componentName: 'HDForm',
  provide() {
    return {
      form: this,
    }
  },
  props: {
    rules: {
      type: Object,
    },
    model: {
      type: Object,
    },
  },
  methods: {
    validate(cb) {
      const tasks = this.$children
        .filter((item) => item.prop)
        .map((item) => item.validate())
      Promise.all(tasks)
        .then(() => {
          cb(true)
        })
        .catch(() => {
          cb(false)
        })
    },
  },
  mounted() {
    this.$on('focus', (e) => {
      this.$emit('on-focus', e.target)
    })
    this.$on('blur', (e) => {
      this.$emit('on-blur', e.target)
    })
  },
}
</script>

<style scoped>
.hd-form {
  width: 100%;
  padding: 20px;
  background-color: #fff;
  border-radius: 4px;
}
</style>
