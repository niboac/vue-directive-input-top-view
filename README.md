# vue-directive-input-top-view
vue的自定义指令，用于在手机端input输入的时候，顶部浮窗同步显示输入的文字，以免input被软键盘遮挡。

# 使用方法

在vue的main.js 中增加
// 自定义指令
import Directives from '../../directive'
Vue.use(Directives)

模板中:
 <input v-input-top-view type="text" />


![image](https://github.com/niboac/vue-directive-input-top-view/blob/main/static/demo.gif)
