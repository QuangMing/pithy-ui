<template>
<div>
    
     <pi-loading  has-text >loading....</pi-loading>
         <div style="width:100%;height:10px;background:#95d2df"></div>
     <pi-loading    has-text type="lo-round" >type:lo-round</pi-loading>
          <div style="width:100%;height:10px;background:#95d2df"></div>
     <pi-loading has-text  type="lo-square" >type:lo-square</pi-loading>
          <div style="width:100%;height:10px;background:#95d2df"></div>
     <pi-loading   has-text type="lo-overturn" >type:lo-overturne</pi-loading>
          <div style="width:100%;height:10px;background:#95d2df"></div>
          type:(lo-round/lo-square/lo-overturn/ 默认为图一)
          mask：遮罩  /   has-text：是否显示文字 
          width  /  height  
</div>
</template>

<script>
  // @ is an alias to /src
//mask
  export default {
    name: 'Loading',
    components: {},
    data(){
        return  {
        }
    },
    methods:{
        
    }
  }
</script>

<style lang="scss" scoped>
 
</style>