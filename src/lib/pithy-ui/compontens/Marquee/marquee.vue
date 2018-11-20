<template>
 <div >
        <li ref="rollul" v-for="item in list"   :class="{anim:animate==true}">
              <span>{{item[content]}}</span><!--中括号可以存变量-->
        </li>
</div>

</template>

<script>
    export default {
      name: 'pi-marquee',
      mounted () {
        // this.$parent.init()
      },
      created(){
       setInterval(this.scroll,2000) 
       console.log(this.content)
      },
      props:{
          list:{
            type:[Object,Array],
            default:()=>{
              return ''
            }
          },
          content:{
            type:String,
            default:()=>{
              return ''
            }
          }
      },
      data(){
        return {
           animate:true,
           contents:null 
        }
      },
      methods: {
       scroll(){
        let con1 = this.$refs.rollul;//获取该元素的类数组
     
    con1[0].style.marginTop='30px';//一开始  top 30px
        this.animate=!this.animate;//false
        const that = this; //保存好this的指向
        setTimeout(function(){//将children数组开头与结尾互换
            that.list.push(that.list[0]);
            that.list.shift();
            con1[0].style.marginTop='0px';  //开头top 为0px
            that.animate=!that.animate;  // 这个地方如果不把animate 取反会出现消息回滚的现象，此时把ul 元素的过渡属性取消掉就可以完美实现无缝滚动的效果了
        },0)
  }
}
    }
</script>

<style lang="css">

</style>
