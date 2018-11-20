<template>
     
        <div  :class="className()" class="pi-cloumn">
        <tbody>
          <tr class="thead"><td>头部信息</td></tr>
        <tr v-for="tmp of  taInfo"><td>{{tmp}}</td></tr>
           <!--<slot>暂无信息</slot>-->
        </tbody>
        </div>

</template>
<script>
 import bus from './bus.js'

    export default {
     name: 'pi-cloumn', //组件名，例如这样用<pi-cloumn>按钮
     created() {
        // console.log(this.$store)
        console.log(this.table)
     },
       props:{
         prop:{
          type:String,
          default:()=>{
             return null
          }
        },
      },
      data(){
          return {
               i:0,
            list:[],
            table:[]
          }
      },
      computed:{
         taInfo:function(){//父组件数据，遍历抛出prop对应值
            let item=this.$store.getters.table
            let length=item.length;
            for(let key in item){ this.table.push(item[key][`${this.prop}`])} 
            return this.table
          }
      },
      methods:{ //绑定的方法
         className () { 
          //  this.type + ' ' + this.size;     
          //  console.log(this.type + ' ' + this.size + ' ' + this.bgColor)
          return ;
          }
   }
    }
</script>


<style lang="scss" scoped>
  @import 'table'
</style>

