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
import { Toast, Confirm } from 'hundun-ui'
Vue.use(Toast)
Vue.use(Confirm)
```

使用插件

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
