export default function create(component, props, Vue) {
  // 获取vm实例
  const Crol = Vue.extend(component) // 获取vue构造函数
  const comp = new Crol({propsData: props}).$mount() // 得到vue实例 挂载 得到dom元素

  // 生成dom 追加到body
  document.body.appendChild(comp.$el)
  // 添加销毁方法
  comp.remove = () => {
    document.body.removeChild(comp.$el)
    comp.$destroy()
  }
  return comp
}
export const getStrLen = str => {
  let strLen = 0
  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) > 128) {
      strLen = strLen + 2
    } else {
      strLen = strLen + 1
    }
  }
  return strLen
}
