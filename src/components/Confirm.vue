<template>
  <div v-if="showConfirm" class="hd-confirm-dialog">
    <div class="hd-confirm-dialog-wrap">
      <div class="hd-confirm-dialog-wrap-tit">{{ title }}</div>
      <div class="hd-confirm-dialog-wrap-content" v-html="content"></div>
      <div class="hd-confirm-btn">
        <p @click="handleCancel" class="hd-confirm-btn__l">{{ cancelBtn }}</p>
        <p @click="handleConfirm" class="hd-confirm-btn__r">{{ confirmBtn }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HDConfirm',
  data() {
    return {
      showConfirm: true,
    }
  },
  props: {
    title: {
      type: String,
      default: '',
    },
    content: {
      type: String,
      default: '',
    },
    confirmBtn: {
      type: String,
      default: '确认',
    },
    cancelBtn: {
      type: String,
      default: '取消',
    },
    onconfirm: {
      type: Function,
    },
    oncancel: {
      type: Function,
    },
  },
  methods: {
    handleCancel() {
      this.oncancel()
      this.showConfirm = false
    },
    handleConfirm() {
      this.onconfirm()
      this.showConfirm = false
    },
  },
}
</script>

<style lang="scss" scoped>
@mixin dialog() {
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 999;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.6);
}
.hd-confirm-dialog {
  @include dialog();
  &-wrap {
    width: 290px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    border-radius: 4px;
    padding: 16px 16px 40px;
    &-tit {
      font-size: 18px;
      line-height: 24px;
      text-align: center;
      color: #333;
    }
    &-content {
      font-size: 14px;
      line-height: 20px;
      color: #666;
      text-align: center;
      padding: 16px 0;
    }
    .hd-confirm-btn {
      width: 100%;
      height: 40px;
      position: absolute;
      bottom: 0;
      left: 0;
      border-top: 1px solid rgb(234, 234, 234);
      display: flex;
      align-items: center;
      justify-content: center;
      color: #d7ab70;
      font-size: 16px;
      &__l {
        width: 50%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #333;
        border-right: 1px solid rgb(234, 234, 234);
      }
      &__r {
        width: 50%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
}
</style>
