// 用来暴露我们的组件

import LuojieTest from './src/index.vue'

LuojieTest.install = Vue => {
  Vue.component(LuojieTest.name ,LuojieTest);
}

export default LuojieTest
