<template>
  <div :class="['pi-col',`span-${span}`,`offset-${offset}`]">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'PiCol',
    props: {
      span: {
        type: String,
        required:true
      },
      offset: {
        type: String,
        default:'0'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import 'Col';
</style>