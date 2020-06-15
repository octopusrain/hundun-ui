# hundun-ui

## usage

## npm 模块引入示例

### install

`npm install hundun-ui -S` or

`yarn add hundun-ui --save-dev`

## use

## 注册插件

## 全局引入

```
import Vue from 'vue'
import HUNDUNUI from 'hundun-ui'
Vue.use(HUNDUNUI)
```

## 模块引入

### 安装 babel-plugin-component

`npm install babel-plugin-component -D`

### 配置 babel plugin

```
"plugins": [
  [
    "component",
    {
      "libraryName": "hundun-ui",
      "style": false
    }
  ]
]
```

### code

```
import Vue from 'vue'
import {hdToast,hdConfirm} from 'hundun-ui
Vue.use(hdToast)
Vue.use(hdConfirm)
```

## 完整组件列表和引入方式(完整组件列表以 [components.js][components] 为准)

```
import Vue from 'vue'
import {hdToast,hdConfirm,hdScrollView,hdTextHide,hdTips,hdFixBtn,hdForm,hdFormItem,hdInput,hdSelect} from 'hundun-ui
Vue.use(hdToast)
Vue.use(hdConfirm)
...
```

## 使用插件 示例代码

```
<template>
  <main>
    <hdScrollView @onpulldown="handlePullDown" @onpullup="handlePullUp">
    <div class="info1" ref="info1">
      <p class="tit">个人基本信息</p>
      <hdForm
        :model="data"
        :rules="rules"
        ref="hdForm"
        @on-focus="formFocus = true"
        @on-blur="formFocus = false"
      >
        <hdFormItem label="手机号码" prop="phone">
          <hdInput
            v-model="data.phone"
            placeholder="请填写您的手机号"
            type="tel"
            disabled
          >
          </hdInput>
        </hdFormItem>
        <hdFormItem label="姓名" prop="name">
          <hdInput v-model="data.name" placeholder="请填写您的姓名" type="text">
          </hdInput>
        </hdFormItem>
        <hdFormItem label="性别" prop="sex">
          <hdSelect v-model="data.sex">
            <option value selected disabled style="display:none;"
              >请选择</option
            >
            <option :value="1">男</option>
            <option :value="2">女</option>
          </hdSelect>
        </hdFormItem>
        <hdFormItem label="出生日期" prop="birthday">
          <hdInput
            v-model="data.birthday"
            placeholder="请填写您的出生日期"
            type="date"
          >
          </hdInput>
        </hdFormItem>
        <hdFormItem label="微信号" prop="weixin">
          <hdInput
            v-model="data.weixin"
            placeholder="请填写您的微信"
            type="text"
          >
          </hdInput>
        </hdFormItem>
      </hdForm>
      <!-- 不生效，在scroll view中 -->
      <!-- <hdFixButton>登录</hdFixButton> -->
    </div>
    </hdScrollView>
    <hdFixBtn @click="login">
      <p>登录</p>
      <hdTips tips="邀请好友得颜值，上线500"></hdTips>
    </hdFixBtn>
    <hdMarquee :receiveList="receiveList"></hdMarquee>
  </main>
</template>
```

```
<script>
export default {
  data() {
    return {
      formFocus: false,
      data: {
        phone: '18618322994',
        name: '',
        birthday: '1980-01-01',
        weixin: '',
        sex: '',
      },
      rules: {
        name: [{ required: true, message: '用户名不能为空' }],
        phone: [{ required: true, message: '手机号不能为空' }],
        sex: [{ required: true, message: '请选择性别' }],
        birthday: [{ required: true, message: '出生日期不能为空' }],
        weixin: [{ required: true, message: '微信号不能为空' }],
      },
      receiveList: [
        {
          avatars:
            'http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJbE4CqHgp28Nq0uGxNQcLWuUXbdEbiaWpGkM4qe9mOcw3azbBNBVudSOG7QcQshVdQqFlqk5WhnWQ/132',
          name: 'stacy',
          desc: '成功领取直播券',
        },
        {
          avatars:
            'http://thirdwx.qlogo.cn/mmopen/vi_32/TaJVdWvc44qRNyo5LSSbN2ryicsd2oJUsovpRzLJrJl24d7ZTnaTw6oYUT6He1amK7wg87mq3JsNwcq17MGCjcg/132',
          name: '唐',
          desc: '成功领取直播券',
        },
        {
          avatars:
            'https://thirdwx.qlogo.cn/mmopen/vi_32/22l8aEibJoqmS6cxOib4TMo27mCiao4ibQP5TZyBsHfhxCw9CLjibmVt2Vjundu2zI3jtNehibf39ibxob0JYliaswp7cA/132',
          name: '唐',
          desc: '成功领取直播券',
        },
        {
          avatars:
            'http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJbE4CqHgp28Nq0uGxNQcLWuUXbdEbiaWpGkM4qe9mOcw3azbBNBVudSOG7QcQshVdQqFlqk5WhnWQ/132,http://thirdwx.qlogo.cn/mmopen/vi_32/TaJVdWvc44qRNyo5LSSbN2ryicsd2oJUsovpRzLJrJl24d7ZTnaTw6oYUT6He1amK7wg87mq3JsNwcq17MGCjcg/132,https://thirdwx.qlogo.cn/mmopen/vi_32/22l8aEibJoqmS6cxOib4TMo27mCiao4ibQP5TZyBsHfhxCw9CLjibmVt2Vjundu2zI3jtNehibf39ibxob0JYliaswp7cA/132',
          name: '',
          desc: '已有193人领取',
        },
      ]
    }
  },
  methods:{
    login() {
      this.$refs['hdForm'].validate((valid) => {
        if (valid) {
          this.$confirm({
            title: '温馨提示',
            content: `确认要提交吗？提交后不可修改`,
          })
            .then(() => {
              this.$toast('点击确定')
            })
            .catch(() => {
              this.$toast('点击取消')
            })
        } else {
          this.$toast('用户基本信息不能为空')
          //alert('检验失败')
        }
      })
    },
    handlePullDown(refresh) {
      setTimeout(() => {
        refresh.endDownLoading(true, '成功刷新')
      }, 600)
    },
    handlePullUp(refresh) {
      refresh.endUpLoading(true)
    }
  },
  mounted(){
  }
}

</script>
```

## script 引入示例（test/index.html）

## 引入资源

```

 <script src="https://cdn.jsdelivr.net/npm/vue@2.5.21/dist/vue.js"></script>
 <script src="lib/index.js"></script>

```

## use

```
  Vue.use(HUNDUNUI.hdConfirm)
  Vue.use(HUNDUNUI.hdToast)
  var app = new Vue({
    el: 'app',
    mounted: function() {
      this.$confirm({
        title: '测试',
        content: 'hahhhhewiaeiewi',
      })
      this.$toast('测试')
    },
  })
```

[components]: https://github.com/octopusrain/hundun-ui/blob/master/components.js
