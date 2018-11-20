<template>
    <div class="flexitem" :style="{'align-self':self}" @click="handleClick">
        <slot></slot>
    </div>
</template>

<script>
export default {
  name: 'pi-Fitem',
  props:{
     self:{
       type:String,
       default:()=>{
         return ''
       }
     }
  },
  methods: {
    handleClick (event) {
      this.$emit('click', event)
    }
  }
}
</script>

<style scoped lang="scss">
</style>