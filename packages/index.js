import LuojieTest from './test'
import LuoButton from './button'
import testA from './testA'
import testB from './testB'
import MobileTable from './moblie-table'
const components = [
    LuojieTest,
    LuoButton,
    testA,
    testB,
    MobileTable,
]

const install = function (Vue) {
  // 判断是否安装，安装过就不继续往下执行
  if (install.installed) return;

  install.installed = true;
  
  // 遍历注册所有组件
  components.map(component => Vue.use(component))
}

// 检测到 Vue 才执行，毕竟我们是基于 Vue 的
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  // 所有组件，必须具有 install，才能使用 Vue.use()
  ...components
}