<template>
<div>
<pi-Rate value="0.5">
</pi-Rate>
<pi-Rate  @onRate="onrate" :value="value" ></pi-Rate>
<pi-Rate   @onRate="onrate" :value="value" theme="green" length="6"></pi-Rate>
<pi-Rate  animate='.2'  theme="green"></pi-Rate>
</div>
  
</template>

<script>
  // @ is an alias to /src

  export default {
    name: 'Rate',
    components: {},
    data(){
        return {value:3}
    },
    methods:{
      onrate (num) {
      console.log(num)
      this.value = num
      }
    }
  }
</script>

<style lang="scss" scoped>
 

 
</style>