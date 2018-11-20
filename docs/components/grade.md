####  评分
```
例子：

     <pi-Rate value="0.5"></pi-Rate>

  注意：value是分数
 ```

####  自选颜色/长度
```
例子：

<pi-Rate   theme="green" length="6"></pi-Rate>

  注意：theme是颜色，length 是长度。
 ```


####  点击停留
```
例子：

   <pi-Rate   @onRate="onrate" :value="value" ></pi-Rate>

    script：
           data(){
             return {value:3}
           },
           methods:{
                 onrate (num) {
                 console.log(num)
                 this.value = num
                 }
            }

    注意：通过属性绑定value 通过待方法onRate子组件处理抛出当前单击评分位置改变value实现
 ```

####  动画评分
```
例子：

   <pi-Rate  animate='.2'  theme="green"></pi-Rate>
 
 ```