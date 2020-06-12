<template>
  <div
    @click="$emit('click')"
    class="hd-fix-button"
    :style="{ color, backgroundColor: bgColor }"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'HDFixBtn',
  props: {
    bgColor: {
      type: String,
    },
    color: {
      type: String,
    },
  },
}
</script>

<style lang="scss" scoped>
.hd-fix-button {
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 99;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 17px;
  color: #fff;
  background: rgb(226, 63, 63);
}
</style>
