<template>
  <div class="ui-test">
      <div class="test-count" @click="handleClick"> {{ num }} </div>
  </div>
</template>
<script>
export default {
  name : 'LuojieTest', // 重点需要提醒的是name 属性，这个尤为重要，因为这是你以后组件暴露出去的名字。比如这个组件，用的时候就是 <luojie-test></luojie-test>
  data () {
    return {
      num : 0
    }
  },
  components: {},
  computed: {},
  methods: {
    handleClick(){
      this.num ++;
    }
  },
  created(){
  }
}
</script>
<style rel="stylesheet/less" lang="less">
.ui-test{
  .test-count{
    text-align: center;
  }
}
</style>