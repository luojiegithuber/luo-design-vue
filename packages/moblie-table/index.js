// 用来暴露我们的组件

import MobileTable from './src/index.vue'

MobileTable.install = Vue => {
  Vue.component(MobileTable.name ,MobileTable);
}

export default MobileTable
