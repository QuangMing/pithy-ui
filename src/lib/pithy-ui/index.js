// ------导入组件------
// basic模块组件
import Row from './compontens/Row';
import Col from './compontens/Col';
import Button from './compontens/Button';
import {Flexbox,FlexboxItem} from './compontens/Flexbox/index'
import Loading from './compontens/Loading'
import {Marquee} from './compontens/Marquee'
import Rate from './compontens/Rate'


// 存储所有的qian-ui组件
const components = [
  // basic模块组件
  Row,
  Col,
  Button,
  Flexbox,
  FlexboxItem,
  Loading,
  Marquee,
  Rate

];

// ------导入公共方法------
import PiGlobal from './common';
// PiUse--简化Vue使用Vue.use注册组件的步骤的方法
// install--引入全部组件时的注册
const {
  PiUse,install
} = PiGlobal;
// 为所有组件模块添加install方法, 使组件可以被Vue.use注册



// ------导出------

// --全部引入
// 配置全部引入的install方法,根据官方文档
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue,components);
}
const API = {
  install,
  components,
};
export default API;

// --按需引入
export {
  // 便于注册的方法
  PiUse,
}
export {
  // basic组件
  Row,
  Col,
  Button,
  Flexbox,
  FlexboxItem,
  Loading,
  Marquee,
  Rate
};