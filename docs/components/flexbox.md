### 弹性布局
```
使用标签：

    <pi-Flex> <pi-Fitem>   </pi-Fitem> </pi-Flex>


```



##### X轴对齐方式
```
   
    <pi-Flex justify='space-around'>
           <pi-Fitem>Around</pi-Fitem>
    </pi-Flex>

   justify：space-between  space-around  center  flex-start flex-end
```



##### y轴对齐方式
```
 
    <pi-Flex aligin="center">
           <pi-Fitem>aligin</pi-Fitem>
    </pi-Flex>

   aligin: center  flex-end   flex-start
```



##### Self对齐方式
```
 
    <pi-Flex>
           <pi-Fitem  self="center"></pi-Fitem>
    </pi-Flex>

   self: center  flex-end   flex-start
```