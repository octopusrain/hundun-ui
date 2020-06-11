# hundun-ui

## usage

### script 引入示例（test/index.html）

引入资源

```

 <script src="vue.js"></script>
 <script src="hd-confirm.js"></script>

```

### use

```
  Vue.use(HDConfirm.Confirm)
  Vue.use(HDConfirm.Toast)
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

## npm 模块引入示例

### install

`npm install hundun-ui -S`

### use

注册插件

```
import Vue from 'vue'
import HUNDUNUI,{ Toast, Confirm } from 'hundun-ui'
Vue.use(Toast)
Vue.use(Confirm)
Vue.use(HUNDUNUI)
```

使用插件

```
<HDScrollView @onpulldown="handlePullDown" @onpullup="handlePullUp">
    <div class="info1" ref="info1">
      <p class="tit">个人基本信息</p>
      <HDForm
        :model="data"
        :rules="rules"
        ref="hdForm"
        @on-focus="formFocus = true"
        @on-blur="formFocus = false"
      >
        <HDFormItem label="手机号码" prop="phone">
          <HDInput
            v-model="data.phone"
            placeholder="请填写您的手机号"
            type="tel"
            disabled
          >
          </HDInput>
        </HDFormItem>
        <HDFormItem label="姓名" prop="name">
          <HDInput v-model="data.name" placeholder="请填写您的姓名" type="text">
          </HDInput>
        </HDFormItem>
        <HDFormItem label="性别" prop="sex">
          <HDSelect v-model="data.sex">
            <option value selected disabled style="display:none;"
              >请选择</option
            >
            <option :value="1">男</option>
            <option :value="2">女</option>
          </HDSelect>
        </HDFormItem>
        <HDFormItem label="出生日期" prop="birthday">
          <HDInput
            v-model="data.birthday"
            placeholder="请填写您的出生日期"
            type="date"
          >
          </HDInput>
        </HDFormItem>
        <HDFormItem label="微信号" prop="weixin">
          <HDInput
            v-model="data.weixin"
            placeholder="请填写您的微信"
            type="text"
          >
          </HDInput>
        </HDFormItem>
      </HDForm>
      <!-- 不生效，在scroll view中 -->
      <HDFixButton text="登录"></HDFixButton>
    </div>
  </HDScrollView>
  <HDFixButton text="登录"></HDFixButton>
```

```
this.$confirm({
    title: '博鳌天',
    content: '获取用户信息(init方法参数说明见 混合 mixins/index)成功后添加埋点', // 可以是富文本
    confirmBtn: '', // initValue('确定')
    cancelBtn: '', // initValue('取消')
  })
  .then(() => {
    this.$toast('点击确定')
  })
  .catch(() => {
    this.$toast('点击取消')
  })
```
