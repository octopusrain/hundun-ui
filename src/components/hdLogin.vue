<template>
  <div v-if="showLogin" class="login-dialog">
    <div class="login-wrap" @click="handleStopClose($event)">
      <div class="title">手机号登录</div>
      <div class="phone-wrap">
        <div class="phone-l">
          <div id="show" class="show">{{ c_code }}</div>
          <select id="country-list" v-model="c_code">
            <option
              v-for="(item, key) in country_list"
              :key="key"
              :value="item.country_code"
            >
              {{ item.country_name + ' ' + item.country_code }}
            </option>
          </select>
        </div>
        <div class="phone-r">
          <input
            @focus="handleBlur"
            @blur="handleBlur"
            placeholder="请输入手机号"
            type="tel"
            name=""
            id="phone"
            v-model="phone"
          />
        </div>
      </div>
      <div class="code-wrap">
        <input
          @focus="handleBlur"
          @blur="handleBlur"
          placeholder="请输入验证码"
          type="tel"
          id="code"
          v-model="code"
        />
        <span></span>
        <button
          @click="get_code(0)"
          v-if="!yy_show"
          class="right"
          id="code-desc"
        >
          获取验证码
        </button>
        <p v-if="yy_show" id="yuyin">
          {{ time }}s<span @click="handleShowYY">未收到?</span>
        </p>
      </div>
      <!-- 滑块验证容器 -->
      <div id="cbox"></div>
      <div @click="bind_phone" class="login-btn" id="login">{{ '确认' }}</div>
      <div @click="handleClose" class="close-icon"></div>
    </div>
  </div>
</template>
<script>
import {getBaseEnvironment, query} from 'hundun-utils'
var open_id = window.localStorage.getItem('openid')
var envi = getBaseEnvironment()
var pid = query('pid') || ''
var sale_channel = query('sale_channel')
var channel_id = parseInt(
  query('channel_id') ||
    process.env.CHANNEL_ID ||
    process.env.VUE_APP_CHANNEL_ID,
)
var plat_type = 'h5_h5_h5'
var USER_HOST = process.env.USER_HOST || process.env.VUE_APP_USER_HOST
let wxpub_id = 2
if (window.location.host.indexOf('activity.hundun.com.cn') > -1) {
  wxpub_id = 3
} else if (
  window.location.host.indexOf('tools.hundun.cn') > -1 ||
  window.location.host.indexOf('share.hundun.cn') > -1
) {
  wxpub_id = 1
}
export default {
  name: 'hdLogin',
  props: {
    user_info: {
      type: Object,
    },
    channel: {
      type: String,
    },
    onsuccess: {
      type: Function,
    },
  },
  data() {
    return {
      user_id: '',
      country_list: [],
      time: 60,
      yy_show: false,
      c_code: '+86',
      code: '',
      phone: '',
      compele_phone: '',
      showLogin: true,
    }
  },
  mounted() {
    this.user_id = this.user_info ? this.user_info.uid : ''
    this.get_country()
  },
  methods: {
    toast(msg) {
      if (this.$toast) {
        this.$toast(msg)
      } else {
        window.alert(msg)
      }
    },
    handleStopClose(e) {
      e.stopPropagation()
      return false
    },
    handleBlur() {
      document.body.scrollIntoView()
    },
    handleShowYY() {
      if (this.$confirm) {
        this.$confirm({
          title: '语音验证码',
          content:
            '若您长时间未能收到验证码短信，可通过电话方式获取，请注意接听来电。',
          confirmBtn: '现在接听',
        }).then(() => {
          this.get_code(1)
        })
      } else {
        if (
          window.confirm(
            '若您长时间未能收到验证码短信，可通过电话方式获取，请注意接听来电。',
          )
        ) {
          this.get_code(1)
        }
      }
    },
    get_code(isvoice) {
      if (this.c_code != '+86') {
        this.compele_phone = '00' + this.c_code.substring(1) + this.phone
      } else {
        this.compele_phone = this.phone
      }
      if (!this.phone) {
        this.toast('请输入手机号')
        return false
      }
      this.get_code_request({
        phone: this.compele_phone,
        isvoice: isvoice,
        type: 'bind_phone',
        channel: this.channel,
        source: 'verify',
        sale_channel,
      })
    },
    get_code_request(params) {
      var that = this
      return new Promise((resolve, reject) => {
        return axios
          .get(USER_HOST + '/get_identify_code', {
            params,
          })
          .then(res => {
            let data = res
            if (data.error_no == 0) {
              this.yy_show = true
              let timer = setInterval(() => {
                this.time--
                if (this.time == 0) {
                  this.time = 60
                  this.yy_show = false
                  clearInterval(timer)
                }
              }, 1000)
            } else if (data.error_no == 101) {
              // 初始化
              new YpRiddler({
                expired: 10,
                mode: 'dialog',
                winWidth: '78%',
                lang: 'zh-cn', // 界面语言, 目前支持: 中文简体 zh-cn, 英语 en
                container: document.getElementById('cbox'),
                appId: '0ed9c02d5d714947811986a098450f4a',
                version: 'v1',
                onError: function (param) {
                  if (!param.code) {
                    this.toast('错误请求')
                  } else if (parseInt(param.code / 100) == 5) {
                    // 服务不可用时，开发者可采取替代方案
                    this.toast('验证服务暂不可用')
                  } else if (param.code == 429) {
                    this.toast('请求过于频繁，请稍后再试')
                  } else if (param.code == 403) {
                    this.toast('请求受限，请稍后再试')
                  } else if (param.code == 400) {
                    this.toast('非法请求，请检查参数')
                  }
                  // 异常回调
                  this.toast('验证服务异常')
                },
                onSuccess: function (validInfo, close, useDefaultSuccess) {
                  // 成功回调
                  // 验证成功默认样式

                  useDefaultSuccess(true)
                  close()
                  that.get_code_request({
                    phone: params.phone,
                    isvoice: params.isvoice,
                    type: 'bind_phone',
                    channel: params.channel,
                    source: 'verify',
                    token: validInfo.token,
                    authenticate: validInfo.authenticate,
                    sale_channel,
                  })
                },
                onFail: function (code, msg, retry) {
                  // 失败回调
                  console.log('出错啦：' + msg + ' code: ' + code)
                  retry()
                },
                beforeStart: function (next) {
                  console.log('验证马上开始')
                  next()
                },
                onExit: function () {
                  // 退出验证 （仅限dialog模式有效）
                  console.log('退出验证')
                },
              })
            } else {
              this.toast(data.error_msg)
            }
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    bind_phone() {
      if (this.c_code != '+86') {
        this.compele_phone = '00' + this.c_code.substring(1) + this.phone
      } else {
        this.compele_phone = this.phone
      }
      if (!this.phone) {
        this.toast('请输入手机号')
        return false
      }
      if (this.user_id && this.user_info.phone === this.compele_phone) {
        this.onsuccess(this.user_info)
        this.handleClose()
        return false
      }
      if (!this.code) {
        this.toast('请输入验证码')
        return false
      }
      if (envi == 'wx') {
        return new Promise((resolve, reject) => {
          return axios
            .post(
              USER_HOST + '/bind_phone',
              JSON.stringify({
                uid: this.user_id,
                phone: this.compele_phone,
                identify_code: this.code,
                user_name: '',
                type: 'h5wx',
                openid: open_id,
                channel: this.channel,
                pid,
                sale_channel,
                plat_type,
                channel_id,
                wxpub_id,
              }),
            )
            .then(res => {
              if (res.error_no == 0) {
                let user_info = res.data
                window.localStorage.setItem('Sid', user_info.session.sid)
                window.localStorage.setItem('token', user_info.session.token)
                window.localStorage.setItem('user_id', user_info.uid)
                this.onsuccess(user_info)
                this.handleClose()
              } else {
                this.toast(res.error_msg)
                reject(res.error_msg)
              }
            })
            .catch(err => {
              this.toast(err)
              reject(err)
            })
        })
      } else {
        // 第三方平台
        return new Promise((resolve, reject) => {
          return axios
            .post(USER_HOST + '/identify_code_login', {
              phone: this.compele_phone,
              identify_code: this.code,
              channel: this.channel,
              channel_id,
              pid,
              sale_channel,
              plat_type,
            })
            .then(res => {
              if (res.error_no == 0) {
                let user_info = res.data
                window.localStorage.setItem('Sid', user_info.session.sid)
                window.localStorage.setItem('token', user_info.session.token)
                window.localStorage.setItem('user_id', user_info.uid)
                this.onsuccess(user_info)
                this.handleClose()
              } else {
                this.toast(res.error_msg)
                reject(res.error_msg)
              }
            })
            .catch(err => {
              this.toast(err)
              reject(err)
            })
        })
      }
    },
    handleClose() {
      this.showLogin = false
    },
    get_country() {
      return axios
        .get(USER_HOST + '/app/user_country_list')
        .then(res => {
          let country_list = res.data.country_list
          this.country_list = country_list
        })
        .catch(err => {
          console.log(err)
        })
    },
  },
}
</script>

<style lang="scss">
.login-dialog {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba($color: #000000, $alpha: 0.6);
  z-index: 99;
  .title {
    height: 45px;
    line-height: 45px;
    font-size: 18px;
    text-align: center;
    margin-bottom: 5px;
  }
  .close-icon {
    position: absolute;
    top: 15px;
    right: 10px;
    width: 14px;
    height: 14px;
    background: url(https://yxs-web.oss-cn-beijing.aliyuncs.com/398e4263462ec9b757492bbd55aeb32d.png)
      no-repeat;
    background-size: 100% 100%;
  }
}

.login-wrap {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 290px;
  height: 228px;
  border-radius: 5px;
  transform: translate(-50%, -60%);
  padding: 5px 16px;
  background: #fff;
  z-index: 10;
  .phone-wrap {
    width: 100%;
    height: 39px;
    background: rgb(245, 245, 245);
    border-radius: 5px;
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    .phone-l {
      width: 39px;
      text-align: center;
      position: relative;
      height: 20px;
      line-height: 20px;
      border-right: 0.5px solid #b5b5b5;
      select {
        width: 100%;
        height: 100%;
        opacity: 0;
        position: absolute;
        left: 0;
        top: 0;
        border: none;
        background: none;
        -webkit-appearance: none;
      }
      .show {
        width: 100%;
        height: 100%;
        color: rgb(226, 63, 63);
        font-size: 12px;
      }
    }
    .phone-r {
      flex: 1;
      height: 20px;
      line-height: 20px;
      padding-left: 10px;
      color: #666;
      input {
        width: 100%;
        height: 100%;
        border: none;
        background: none;
        font-size: 14px;
      }
    }
  }
  .desc {
    text-align: center;
    color: #999;
    font-size: 14px;
    line-height: 20px;
    padding-bottom: 10px;
  }
  .code-wrap {
    width: 100%;
    height: 39px;
    margin-bottom: 23px;
    display: flex;
    align-items: center;
    input {
      display: block;
      width: 155px;
      height: 39px;
      line-height: 39px;
      padding-left: 12px;
      border-radius: 4px;
      border: none;
      background: rgb(245, 245, 245);
      font-size: 14px;
      margin-right: 8px;
    }
    button {
      display: block;
      width: 95px;
      height: 39px;
      line-height: 39px;
      font-size: 12px;
      color: rgb(226, 63, 63);
      text-align: center;
      background: rgb(249, 242, 234);
      border-radius: 4px;
      border: none;
      padding: 0;
    }
    #yuyin {
      width: 75px;
      height: 39px;
      line-height: 39px;
      font-size: 12px;
      background: rgb(249, 242, 234);
      text-align: center;
      span {
        color: #3280eb;
        padding-left: 4px;
      }
    }
  }
  .login-btn {
    width: 100%;
    height: 37px;
    text-align: center;
    line-height: 37px;
    background: rgb(226, 63, 63);
    border-radius: 18px;
    font-size: 14px;
    color: #fff;
    letter-spacing: 1px;
  }
}
</style>
