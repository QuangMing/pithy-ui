<template>
    <div>
    <pi-Flex border style="height:300px; background:#ddd;"  justify='space-between'  aligin="center" flow="row" >
      <pi-Fitem  self="flex-start">pi-Fitem （start）</pi-Fitem>
      <pi-Fitem self="center">pi-Fitem （center）</pi-Fitem>
      <pi-Fitem self="flex-end">pi-Fitem  （end）</pi-Fitem>
      <pi-Fitem self="center">pi-Fitem  （center）</pi-Fitem>
      <pi-Fitem self="flex-start">pi-Fitem  （end）</pi-Fitem>
    </pi-Flex>
    <br>
    <pi-Flex justify='space-around'  style="height:80px;border:1px solid #eee;"  >
      <pi-Fitem style="background:#ccc;   padding:15px;"> pi-Fitem  （around)</pi-Fitem>
      <pi-Fitem style="   padding:15px;"> pi-Fitem  （around)</pi-Fitem>
      <pi-Fitem style="background:#ccc;   padding:15px;"> pi-Fitem  （around)</pi-Fitem>
    </pi-Flex>
    <pi-Flex justify='space-around'   aligin="flex-end" flow="column"  style="height:150px;border:1px solid #eee; background:#e9e9e9"  >
      <pi-Fitem> pi-Fitem  （column)</pi-Fitem>
      <pi-Fitem> pi-Fitem  （column)</pi-Fitem>
      <pi-Fitem> pi-Fitem  （column)</pi-Fitem>
    </pi-Flex>

    <h5>  pi-Flex:&nbsp;&nbsp;&nbsp;justify(&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;flex-start&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/center&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/flex-end&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/space- between&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/space- between&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/默认flex-start)&nbsp;&nbsp;&nbsp;&nbsp;<br><br>
           aligin(&nbsp;&nbsp;&nbsp;&nbsp;flex-start&nbsp;&nbsp;&nbsp;&nbsp;/flex-end&nbsp;&nbsp;&nbsp;&nbsp;/center&nbsp;&nbsp;&nbsp;/baseline&nbsp;&nbsp;&nbsp;/stretch)<br><br>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;flow(&nbsp;&nbsp;&nbsp;&nbsp;row&nbsp;&nbsp;&nbsp;&nbsp;/warp&nbsp;&nbsp;&nbsp;/column&nbsp;&nbsp;&nbsp;/warp-reverse&nbsp;&nbsp;&nbsp;&nbsp;/默认rom)
           
      </h5>
      <h5><br>
           pi-Fitem:self(&nbsp;&nbsp;&nbsp;&nbsp;auto/stretch&nbsp;&nbsp;&nbsp;&nbsp;/baseline&nbsp;&nbsp;&nbsp;&nbsp;/flex-start&nbsp;&nbsp;&nbsp;/flex-end)    
      </h5>
    </div>
  
</template>

<script>
  // @ is an alias to /src

  export default {
    name: 'Flexbox',
    components: {},
    methods:{
    }
  }
</script>

<style lang="scss" scoped>
 

  .pi-row {
    margin-top: 20px !important;
  }
  .foot {
    width: 100%;
    height: 400px;
  }
  .mycon {
    width: 800px;
    border: 2px solid #ebebeb;
    padding: 20px;
    margin: auto;
  }
  .pi-row {
    margin-bottom: 10px;
  }

  .pi-grid {
    height: 40px;
    border-radius: .25rem;
  }
  

</style>