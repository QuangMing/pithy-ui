<template>
<div>
   <pi-table :Data="tableData" >
        <pi-cloumn prop="date"></pi-cloumn>
        <pi-cloumn prop="name"></pi-cloumn>
        <pi-cloumn prop="address"></pi-cloumn>
   </pi-table>
   <pi-table :Data="tableData1" >
        <pi-cloumn prop="date"></pi-cloumn>
        <pi-cloumn prop="name"></pi-cloumn>
        <pi-cloumn prop="address"></pi-cloumn>
  </pi-table>


  

</div>
  
</template>

<script>
  // @ is an alias to /src

  export default {
    name: 'Table',
    components: {},
    data(){
        return  {
          tableData: [{
            date: '2032',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '20235-04',
            name: 'asdasd',
            address: 'asdaasd 1517 弄'
          }, {
            date: '32-232323-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2023',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }],
          tableData1: [{
            date: '2016-05-02',
            name: 'asdasd',
            address: 'a1'
          }, {
            date: '2016-05-04',
            name: 'asdasd',
            address: 'asdaasd 1517 弄'
          }, {
            date: '2016-05-01',
            name: 'asd',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: 'asd',
            address: '上海市普陀区金沙江路 1516 弄'
          }],
        }
    },
    methods:{
        
    }
  }
</script>

<style lang="scss" scoped>
 

 
</style>