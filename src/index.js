import realImage from './real-image'
import longpress from './longpress'
import inputTopView from './input-top-view'
import debounce from './debounce'
// 自定义指令
const directives = {
  realImage,
  longpress,
  inputTopView,
  debounce
}

export default {
  install (Vue) {
    Object.keys(directives).forEach(key => {
      Vue.directive(key, directives[key])
    })
  },
}