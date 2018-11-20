<template>
  <div  :style="this.styleFont">
    <slot></slot>
    <div class='rate' @mouseout="mouseOut">
      <span @mouseover="mouseOver(num)"  v-for='num in parseInt(length)' :key="num">☆</span>
      <span class='hollow' :style="styleObject">
        <span @click="onRate(num)" @mouseover="mouseOver(num)" v-for='num in parseInt(length)' :key="num">★</span>
      </span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'pi-Rate',
  data: function () {
    const themeObj = {
      'black': '#00',
      'white': '#fff',
      'red': '#f5222d',
      'orange': '#fa541c',
      'yellow': '#fadb14',
      'green': '#73d13d',
      'blue': '#40a9ff',
      'purple': '#9254de'
    }
    return {
      styleObject: {},
      styleFont: {//控制颜色，如果obj不为空，就赋值obj 否则默认为yellow
        color: themeObj[this.theme] ? themeObj[this.theme] : this.theme,
        fontSize: this.size ? this.size : ''
      }
    }
  },
  props: {
    value: {
        type: [Number, String],
        default: '0'
        },
    length: {
        type: [Number, String],
         default: '5'
         },
    animate: {
        type: [Number, String],
         default: '0'},
    theme: {
        type: [String], 
        default: 'yellow'},
    size: {
        type: [String]},
        readonly: {
            type: [Boolean], 
            defalut: false
            }
  },
  methods: {
    setStyle: function () {
      this.styleObject = {
        width: this.value + 'em',
        transition: `width ${this.animate}s`
      }
    },
    mouseOver (i) {//移入时
      if (this.readonly) { //可读等于false
        return false
      }
      this.styleObject.width = i-1.2 + 'em'   //强行赋值将填充星设置 widht 等于i-1.2 em     
      console.log(this.styleObject)
    },
    mouseOut () {//移出时  width 等于 0 em
      this.styleObject.width = this.value + 'em'
    },
    onRate (i) { //监听点击事件，点击当前星就亮到当前星
      if (this.readonly) {
        return false
      }
      this.$emit('onRate', i-1)
    }
  },
  created: function () {
    if (this.animate === '0' || this.animate === 0) {
      this.setStyle()
    }else{
      setTimeout(() => {
        this.setStyle()
      })      
    }
  }
}
</script>

<style scoped>
.rate{
  position:relative;
  display: inline-block;
}
.rate > span.hollow {
  position:absolute;
  display: inline-block;
  top:0;
  left:0;
  width:0;
  overflow:hidden;
}
</style>