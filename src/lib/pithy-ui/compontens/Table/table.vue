<template>
        <div :style="{width:width}" :class="className()" class="pi-table">
                             <slot></slot>
        </div>
</template>
<script>
 import bus from './bus.js'

    export default {
     name: 'pi-table', //组件名，例如这样用<pi-table>按钮
     created() {//赋值stroe
       this.$store.commit("seTable",this.Data)
     },
     props:{
        propy:{
          type:String,
          default:()=>{
             return null
          }
        },
        type:{
          type:String,
          default:()=>{
             return ''
          }
        },
       width:{
         type:String,
         default:()=>{
             return ''
          }
       },
       Data:{
         type:Array,
         default:()=>{
             return null
          }
       }
     },
    methods:{ //绑定的方法
       className () {
           return this.type
    },
      dealingFn(evt) {
          var el=evt.target
      }
    }
  }
</script>


<style lang="scss" scoped>
  @import 'table'
    
</style>

