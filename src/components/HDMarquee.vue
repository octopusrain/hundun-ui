<template>
  <div v-if="receiveList.length" class="hd-swiperWrap" :style="styles">
    <transition name="hd-swiper" mode="out-in">
      <div class="hd-swiper" :key="JSON.stringify(list)">
        <template v-if="list">
          <img
            v-for="item in list.avatars.split(',')"
            :src="item"
            :key="item"
          />
          <p>{{ list.name + ' ' + list.desc }}</p>
        </template>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'hdMarquee',
  props: {
    receiveList: {
      type: Array,
      default: [],
    },
    styles: {
      type: Object,
      default: null,
    },
    time: {
      type: Number,
      default: 3000,
    },
  },
  data() {
    return {
      list: '',
      currentIndex: 0,
      defaultAvatar:
        'https://yxs-web.oss-cn-beijing.aliyuncs.com/fadb206c623a03c7099100be3d95884b.png',
    }
  },
  mounted() {
    this.list = this.receiveList[this.currentIndex]
    setInterval(() => {
      this.currentIndex++
      if (this.currentIndex >= this.receiveList.length) {
        this.currentIndex = 0
      }
      this.list = this.receiveList[this.currentIndex]
    }, this.time)
  },
}
</script>

<style lang="scss">
.hd-swiperWrap {
  position: absolute;
  min-width: 200px;
  height: 36px;
  border-radius: 18px;
  top: 56px;
  left: 16px;
  z-index: 4;
  background: rgba(0, 0, 0, 0.6);
  overflow: hidden;
  z-index: 99;

  &.has_inviter {
    top: 116px;
  }

  &.is_app {
    top: 16px;
  }

  .hd-swiper {
    display: flex;
    align-items: center;
    height: 36px;
    font-size: 12px;
    color: #fff;
    padding-left: 2px;

    img {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      border: 1px solid #fff;
      margin-left: -12px;

      &:nth-of-type(1) {
        margin-left: 0;
      }
    }

    p {
      padding: 0 12px;
      flex: 1;
    }
  }
}

.hd-swiper-enter-active,
.hd-swiper-leave-active {
  transition: all 0.5s;
}

.hd-swiper-enter {
  transform: translateY(100%);
  opacity: 0.3;
}

.hd-swiper-leave-to {
  transform: translateY(-100%);
  opacity: 0.3;
}
</style>
