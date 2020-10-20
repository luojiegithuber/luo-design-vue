// 用来暴露我们的组件

import LuoButton from './src/index.vue'

LuoButton.install = Vue => {
  Vue.component(LuoButton.name ,LuoButton);
}

export default LuoButton
