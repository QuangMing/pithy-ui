<template>
   
        <button  class="pi-btn" :disabled="disabled"   @click="dealingFn" :style="{backgroundColor: bgColor,'font-size':fontSize, 'border-color':borderColor}"
         :class="[
        'pi-btn'+'  '+type,
        {'is-plain': plain,'is-radius':radius}
        ]"
         >
          <span :style="{color: fontColor}" class="aft-font">
          <i :class="icon" v-if="icon"></i>
          <slot >py-around-btn</slot>
          </span>
  
          </button>

       

</template>
<script>
import "./icon/iconfont.css"

    export default {
  name: 'pi-button', //组件名，例如这样用<pi-button>按钮</pi-button>
  props: {//父组件传入的值
    title: { // 组件显示的文字
      type: String,
      default: () => {
        return 'asdasd';
      }
    },
    icon: { // 组件显示的图标（可选）
      type: String,
      default: () => {
        return '';
      }
    },
    type: { // 组件类型，（可选）主要是背景色的不同（可选值："primary", "danger")
      type: String,
      default: () => {
        return 'default';
      }
    },
    size: { // 组件的大小  （可选）（可选值："normal", "small",  "large")
      type: String,
      default: () => {
        return 'normal';
      }
    },
    bgColor:{ 
      type:String,
      default:()=>{
        return 'none'
      }
    },
    fontColor:{
      type:String,
      default:()=>{
        return ''
      }
    },
    borderColor:{
      type:String,
      default:()=>{
        return ''
      }
    },
    fontSize:{
      type:String,
      default:()=>{
        return ''
      }
    },
    disabled: Boolean,
    plain:Boolean,
    radius:Boolean
  },
  data(){
    return {
      todos:4
    }
  },
  methods:{ //绑定的方法
        className () {
    //  console.log(this.type + ' ' + this.size + ' ' + this.bgColor)
         console.log(this.plain)
      return this.type
      //this.type + ' ' + this.size;
    },
     dealingFn(evt) {

          var el=evt.target
        /*  this.$nextTick(() => {
          if(this.todos%2==0) this.plain=false;
          if(this.todos%2==1) this.plain=true;
          this.todos++
       })*/
      console.log(el);
    },

      

  },
  computed:{
     

  }
}


var upColor=((el)=>{
  console.log(222)

})
</script>


<style lang="scss" scoped>
    @import 'button'
    
</style>

