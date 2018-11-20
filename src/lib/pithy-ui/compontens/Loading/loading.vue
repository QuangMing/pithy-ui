<template>
<div class="loading-warp">
     <div class="loadingmask" v-if="mask"></div><!--遮罩-->
     <div   :style="{'width': width+'px','height': height+'px'}"  :class="className()">
           <div class="cube1"></div>
           <div class="cube2"></div>
           <div class="bounce1"></div>
           <div class="bounce2"></div>

     </div>
     <span class="hansText" v-if="hasText" ><slot>加载中...</slot></span><!--提示文字-->
</div>
     
</template>

<script>

export default {
  name: 'pi-loading',
  props: {
    color: {//颜色
      type: String,
      default: ''
    },
    type:{
        type:String,
        default:'loading'
    },
    width: {//宽度
      type: String,
      default: ''
    },
    height: {//高度
      type: String,
      default: ''
    },
    mask: {//遮罩
      type: Boolean,
      default: false
    },
    hasText: {//是否显示文字
      type: Boolean,
      default: false
    },
    closable: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    closeAction () {
      this.$emit('close')
    },
    className() {
       console.log(this.type)
       return this.type
    }
  }
}
</script>

<style scoped lang="scss">
   @import  'loading.scss';
</style>
