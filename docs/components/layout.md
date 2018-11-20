####  布局
```
基础布局：
	<pi-row>
          <pi-col span="24">
               <div></div>
          </pi-col>
       </pi-row>
        
  注意：row是行，一行有24份空间，可在col中设置span占据空间份。

```

```
分栏间隔:
       <pi-row gap="10">
          <pi-col span="6">
             <div></div>
          </pi-col>
       </pi-row>
   注意：gap是间隔，当span空间超出是会隐藏。

```


```
分栏偏移:
       <pi-row gap="10">
          <pi-col span="6" offset="6">
		<div></div>
          </pi-col>
       </pi-row>
   注意：offset是位移。

```