<template>
      <button 
      class="luo-button"
      :class="[
        `mc-button--${type}`
      ]"
      >
        按钮
      </button>
</template>
<script>
export default {
  name : 'LuoButton', 
  data () {
    return {
    }
  },
  
  props: {
    type: {
      type: String,
      default: 'default'
    }
  }
}
</script>
<style>
.luo-button{
    box-sizing: border-box;
    outline: none;
    margin: 0;
    transition: 0.1s;
    font-weight: 500;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
}

.mc-button--success{
    background-color: green;
}

.mc-button--danger {
    background-color: red;
}
</style>