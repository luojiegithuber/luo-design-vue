/**
 * @version 1.0
 * @Author wjt12933
 * @Date 2020/9/28 10:41
 */
import IWLineChart from './src/index.vue';

IWLineChart.install = function(Vue) {
    Vue.component(IWLineChart.ComponentName, IWLineChart);
};

export default IWLineChart;
