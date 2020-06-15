<template>
  <div v-if="tips" class="hd-tips">
    {{ tips }}
  </div>
</template>

<script>
export default {
  name: 'hdTips',
  props: {
    tips: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
.hd-tips {
  position: absolute;
  top: -30px;
  right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 25px;
  padding: 0 12px;
  border-radius: 12.5px;
  background: linear-gradient(to right, rgb(255, 122, 77), #e75060);
  font-size: 12px;
  color: #fff;
  pointer-events: none;

  &::after {
    position: absolute;
    bottom: -4px;
    right: 40px;
    content: '';
    width: 0;
    height: 0;
    border-left: 3px transparent solid;
    border-right: 3px transparent solid;
    border-top: 5px #e75060 solid;
  }
}
</style>
