function debounce (func, wait = 400, immediate = true) {
  // 定义一个timeout计时器
  let timeout
  return function () {
    // 如果每次进入函数的时候timeout有值，说明等待时间还没有过，不执行函数，清空timeout
    // 如果没有timeout，则说明过了等待期，可以执行函数
    if (timeout) clearTimeout(timeout)
    // 默认立即执行方法，延后执行的话，会让人感觉有卡顿
    if (immediate) {
      // 定义现在是否能执行
      let now = !timeout
      if (now) func.apply(this, arguments)
      // 不论timeout有没有值，都重新给timeout新添加一个定时器
      // 等待wait时间后，将timeout设为null，代表可以继续执行次function
      timeout = setTimeout(() => {
        timeout = null
      }, wait)
    } else {
      // 如果不是立即执行此函数，则在等待wait时间后执行方法
      timeout = setTimeout(() => {
        func.apply(this, arguments)
      }, wait)
    }
  }
}

/**
 * 两种使用方式,传参和不传参
 * <el-button  v-debounce="() => batchDelete('delete')">{{ $t('common.delete') }}</el-button>
 * <el-button v-debounce="batchDelete"> {{ $t('common.delete') }}  </el-button>
 */
export default {
  bind: function (el, binding) {
    let execFunc
    // 在函数传参与不传参调用的时候，打印出来的binding.value是不同的
    // 打印binding.value可以帮助理解为什么有传参和不传参的区别
    console.log(binding.value)
    if (binding.value instanceof Array) {
      // 函数传参
      const [func, time = 500] = binding.value
      execFunc = debounce(func, time)
    } else {
      // 函数不传参
      console.log('函数不传参')
      execFunc = debounce(binding.value, 500)
    }
    el.addEventListener('click', execFunc)

  }
}