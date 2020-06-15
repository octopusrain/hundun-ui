<template>
  <div ref="descIntro" class="hd-text-overflow" v-html="textDesc"></div>
</template>

<script>
import { getStrLen } from '../utils/utils'
export default {
  name: 'hdTextHide',
  props: {
    // 文本
    text: {
      type: String,
      required: true,
    },
    // 文本类型，fold 超出...显示全文可展开，normal 超出隐藏不可展开
    textType: {
      type: String,
      default: '',
    },
    // 截取的文本字符数（汉字2个字符，英文一个字符）
    len: {
      type: Number,
      default: 128,
    },
    // 是否 收起 状态
    isFold: {
      type: Boolean,
      default: true,
    },
    // 收起状态 文案
    foldText: {
      type: String,
      default: '全文',
    },
    // 展开状态文案
    unfoldText: {
      type: String,
      default: '收起',
    },
    // 收起或展开字体颜色
    foldTextColor: {
      type: String,
      default: 'rgb(129,152,227)',
    },
  },
  data() {
    return {
      textDesc: '',
    }
  },
  methods: {
    formatContent(content) {
      if (getStrLen(content) > this.len) {
        return (
          content.replace(/\n/g, '<br>') +
          (this.textType === 'fold'
            ? `<span style="color:${this.foldTextColor};padding-left:2px;">${this.unfoldText}</span>`
            : '')
        )
      }
      return content.replace(/\n/g, '<br>')
    },
    /**
     * content 要处理的字符串
     * len 限制字节数 中文2个字节
     */
    cutContent(content, len = this.len) {
      if (content.length * 2 < len) {
        return this.formatContent(content)
      }
      let cur = ``
      let strLen = 0
      for (let i = 0; i < content.length; i++) {
        cur = cur + content.charAt(i)
        if (content.charCodeAt(i) > 128) {
          strLen = strLen + 2
          if (strLen >= len) {
            return (
              cur.substring(0, cur.length - 3) +
              (this.textType === 'fold'
                ? `...<span style="color:${this.foldTextColor};padding-left:2px;">${this.foldText}</span>`
                : '...')
            )
          }
        } else {
          strLen = strLen + 1
          if (strLen >= len) {
            return (
              cur.substring(0, cur.length - 4) +
              (this.textType === 'fold'
                ? `...<span style="color:${this.foldTextColor};padding-left:2px;">${this.foldText}</span>`
                : '...')
            )
          }
        }
      }
      return this.formatContent(cur)
    },
  },
  mounted() {
    if (this.isFold) {
      // 默认收起
      this.textDesc = this.cutContent(this.text)
    } else {
      this.textDesc = this.formatContent(this.text)
    }
    this.$nextTick(() => {
      this.$refs.descIntro.addEventListener('click', (e) => {
        if (e.target.nodeName === 'SPAN') {
          if (e.target.innerHTML === this.foldText) {
            this.textDesc = this.formatContent(this.text)
          } else {
            this.textDesc = this.cutContent(this.text)
          }
        }
      })
    })
  },
}
</script>

<style lang="scss" scoped>
.hd-text-overflow {
  padding: 9px 16px;
  font-size: 14px;
  line-height: 20px;
  color: #666;
}
</style>
