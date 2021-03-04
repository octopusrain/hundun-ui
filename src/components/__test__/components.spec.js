import {shallowMount} from '@vue/test-utils'
import hdToast from '../hdToast.vue'
import hdTips from '../hdTips.vue'
import hdConfirm from '../hdConfirm.vue'
import hdFixBtn from '../hdFixBtn.vue'
import hdLoading from '../hdLoading.vue'
// import hdTextHide from '../hdTextHide.vue'
// import hdForm from '../hdForm.vue'
// import hdFormItem from '../hdFormItem.vue'

// 挂载元素并返回已渲染的组件的工具函数
function getMountedComponent(Component, propsData) {
  return shallowMount(Component, {
    propsData,
  })
}
/**
 * 测试toast 组件
 */
describe('hdToast', () => {
  it('renders correctly with different props', () => {
    expect(
      getMountedComponent(hdToast, {
        message: 'Hello',
      }).text(),
    ).toBe('Hello')

    expect(
      getMountedComponent(hdToast, {
        duration: 2500,
      }).text(),
    ).toBe('')
  })
})
/**
 * 测试hdtips 组件
 */
describe('hdTips', () => {
  it('renders correctly with different props', () => {
    expect(
      getMountedComponent(hdTips, {
        tips: 'Hello',
      }).text(),
    ).toBe('Hello')

    expect(
      getMountedComponent(hdTips, {
        tips: '2500',
      }).text(),
    ).toBe('2500')
  })
})
/**
 * 测试confirm 组件
 */
describe('hdConfirm', () => {
  it('renders correctly with different props', () => {
    expect(
      getMountedComponent(hdConfirm, {
        title: 'Hello',
      })
        .find('.hd-confirm-dialog-wrap-tit')
        .text(),
    ).toBe('Hello')

    expect(
      getMountedComponent(hdConfirm, {
        content: 'content',
      })
        .find('.hd-confirm-dialog-wrap-content')
        .text(),
    ).toBe('content')

    expect(
      getMountedComponent(hdConfirm, {
        confirmBtn: '确认',
      })
        .find('.hd-confirm-btn__r')
        .text(),
    ).toBe('确认')

    expect(
      getMountedComponent(hdConfirm, {
        cancelBtn: 'cancel',
      })
        .find('.hd-confirm-btn__l')
        .text(),
    ).toBe('cancel')
  })
})
/**
 * 测试hdtips 组件
 */
describe('hdFixBtn', () => {
  it('renders correctly with different props', () => {
    expect(
      getMountedComponent(hdFixBtn, {
        color: 'red',
      }).attributes('style'),
    ).toBe('color: red;')

    expect(
      getMountedComponent(hdFixBtn, {
        bgColor: 'blue',
      }).attributes('style'),
    ).toBe('background-color: blue;')
  })

  it('render a div for slot', () => {
    const wrapper = shallowMount(hdFixBtn, {
      slots: {
        default: '<div class="slot"></div>',
      },
    })
    expect(wrapper.find('.slot').classes('slot')).toBe(true)
  })
})
/**
 * 测试hdLoading 组件
 */
describe('hdLoading', () => {
  it('renders correctly with different props', () => {
    expect(
      getMountedComponent(hdLoading, {
        message: 'Hello',
      }).text(),
    ).toBe('Hello')
  })
})
