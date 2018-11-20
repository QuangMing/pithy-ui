import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuex from 'vuex'

//Vuex 管理状态 11/14
Vue.use(Vuex)
const Stdata=new Vuex.Store({
     state:{   //初始化状态
      table:[]
     },
     getters:{ //监听状态
       table:(state)=>{
         return state.table 
       },
      
     },
     mutations:{ //同步修改方法
        seTable:(state,val)=>{
           state.table=val
        }
     }
})


// // ---1: 按需引入Pi-ui
// import {
//   PiUse,
//   Row,
//   Col,
//   Button
// } from './lib/pithy-ui';
// // 使用PiUse注册组件
// PiUse(Vue, [
//   Row, Col, Button
// ]);

// ---2: 引入全部pithy-ui组件
import PithyUI from './lib/pithy-ui';
Vue.use(PithyUI);

// ---3: 引入pithy-ui样式文件
import './lib/pithy-ui/style/scss/index.scss';


Vue.config.productionTip = false


new Vue({
  router,
  store:Stdata,
  render: h => h(App)
}).$mount('#app')