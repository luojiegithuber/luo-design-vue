// 用来暴露我们的组件

import LuoButton from './src/button'

LuoButton.install = Vue => {
  Vue.component(LuoButton.name ,LuoButton);
}

export default LuoButton
