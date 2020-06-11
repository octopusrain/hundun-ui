<template>
  <div class="hd-toast">
    {{ message }}
  </div>
</template>

<script>
export default {
  name: 'HDToast',
  props: {
    message: {
      type: String,
      default: '',
    },
    duration: {
      type: Number,
      default: 2000,
    },
  },
}
</script>

<style scoped>
.hd-toast {
  padding: 4px 10px;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 4px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
  font-size: 14px;
  max-width: 250px;
}
</style>
