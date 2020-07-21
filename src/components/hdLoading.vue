<template>
  <div class="hd-loading">
    <div class="show-loading">
      <i class="mui-spinner"></i>
      <p class="text">{{ message }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hdLoading',
  props: {
    message: {
      type: String,
      default: '拼命加载中...',
    },
  },
}
</script>

<style lang="scss" scoped>
@keyframes lds-rolling {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.hd-loading {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.6);
  color: white;
  font-size: 14px;
  z-index: 999;

  .show-loading {
    position: fixed;
    padding: 5px;
    width: 120px;
    min-height: 120px;
    top: 45%;
    left: 50%;
    margin-left: -60px;
    background: rgba(0, 0, 0, 0.6);
    text-align: center;
    border-radius: 5px;
    color: #ffffff;
    margin: 0;
    z-index: 2000;
    transform: scale(1) translate(-50%, -50%);
    .mui-spinner {
      margin-top: 24px;
      width: 36px;
      height: 36px;
      display: inline-block;
      border-radius: 50%;
      border: 1px solid #d7ab70;
      border-bottom-color: transparent;
      vertical-align: middle;
      animation: lds-rolling 0.8s linear infinite;
    }

    .text {
      line-height: 1.6;
      font-family: -apple-system-font, 'Helvetica Neue', sans-serif;
      font-size: 14px;
      margin: 10px 0 0;
      color: #fff;
    }
  }
}
</style>
