<template>
    <div class="flex" :class="{'border':border}"  :style="{'flex-flow':flow,'justify-content':justify,'align-items':aligin}" >
      <slot>2111111</slot>
    </div>
</template>

<script>
export default {
  name: 'pi-Flex',
  props: {
    flow:{
      type: String,
      default:()=>{
          return 'row'
      }
    },
    justify:{
      type: String,
      default:()=>{
          return 'flex-start'
      }
    },
    aligin:{
      type:String,
      default:()=>{
         return 'flex-start'
      }
    },
    border:Boolean
    
  },
  created() {
       console.log(this.justify)
        console.log(this.alignitem)
        console.log(this.flow)
  },
  computed: {
    directionClass () {
       
    //   return this.direction === 'vertical' ? 'xm__flex--vertical' : ''
    }
  }
}
</script>

<style scoped lang="scss">
   @import  'flexbox.scss'
</style>