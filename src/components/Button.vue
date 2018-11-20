<template>
<div>

  <div style="background:#0e83cd">
    <pi-button  type="around-btn" >around-btn</pi-button>
    <pi-button    type="lean-btn">lean-btn</pi-button>
    <pi-button type="top-btn">top-btn</pi-button>
    <pi-button type="middle-btn">middle-btn"</pi-button>
    <pi-button type="left-btn" disabled>left-btn</pi-button>    
  </div>
  <div>
  </br>
  </br>
    基础按钮
    <br>
    <div style="width:100%; border:1px solid #ccc">
    <br>
    <pi-button>普通按钮</pi-button>
    <pi-button   style="margin-left:15px;"    type="primary" >主键按钮</pi-button>
    <pi-button   style="margin-left:15px;"    type="info" >信息按钮</pi-button>
    <pi-button   style="margin-left:15px;"    type="warning" >警告按钮</pi-button>
    <pi-button   style="margin-left:15px;"    type="danger" >危险按钮</pi-button>
    <br>
    <br>
    圆角按钮
    <br>
    <br>
    <pi-button radius   style="margin-left:15px;"  >普通按钮</pi-button>
    <pi-button radius   style="margin-left:15px;"  type="primary" >主键按钮</pi-button>
    <pi-button radius  style="margin-left:15px;"  type="info" >信息按钮</pi-button>
    <pi-button radius   style="margin-left:15px;"   type="warning" >警告按钮</pi-button>
    <pi-button radius  style="margin-left:15px;"   type="danger" >危险按钮</pi-button>    
    <br>
    <br>
    图标按钮
    <br>
    <br>
    <div >
    <pi-button type="primary" icon="iconfont  icon-favorite"  >收藏按钮</pi-button>
    <pi-button  style="margin-left:15px;"  icon="iconfont icon-lianjie"  type="primary" >链接按钮</pi-button>
    <pi-button   style="margin-left:15px;"  icon="iconfont 
icon-edit " type="primary" >编写按钮</pi-button>
    <pi-button   style="margin-left:15px;"  type="primary" icon="iconfont icon-jianqie "  >剪切按钮</pi-button>
    <pi-button  disabled   style="margin-left:15px;"  type="primary"   icon="iconfont icon-delete"    >删除按钮</pi-button>    
    </div>
    
    </div>
  
  
    
  </div>
  <h5> bgColor背静颜色&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;borderColor边框颜色&nbsp;&nbsp;&nbsp;&nbsp; fontSize字体大小+px&nbsp;&nbsp;&nbsp; type={around-btn:中间拉开 / &nbsp;&nbsp;&nbsp; lean-btn：倾斜拉开   &nbsp;&nbsp;&nbsp; /       &nbsp;&nbsp;&nbsp;   radius 圆角 &nbsp;&nbsp;&nbsp;   top-btn：下滑 /&nbsp;&nbsp;&nbsp;   iconfont icon-xxx：图标 
              &nbsp;&nbsp;&nbsp;    middle-btn： 上下拉开  &nbsp;&nbsp;&nbsp;  / left-btn：左向右  
      } </h5>
</div>
  
</template>

<script>
  // @ is an alias to /src

  export default {
    name: 'home',
    components: {},
    methods:{
      hanclick(){
        console.log(1)
      }
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