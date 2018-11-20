<template>
  <div class='pi-row' ref='row' :style="{justifyContent,'alignItems':align}">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'PiRow',
    props: {
      // 设置间隔
      gap: {
        type: String,
        default: '0'
      },
     /**
      * 水平排列方式
      * start/end/center/around/etween
      */
      justify: {
        type: String,
        default: 'start'
      },
     /**
      * 垂直排列方式
      * top/middle/bottom
      */
      align: {
        type: String,
        default: 'top'
      }
     //
    },
    methods: {
      // 设置间隔
      ColPadding() {
        var cols = this.$refs.row.children;
        for (const el of cols) {
          el.style.padding = `0px ${this.gap}px`;
        }
      },
    },
    mounted() {
      this.ColPadding();
    },
    computed: {
      justifyContent(){
        var str = this.justify;
        switch (str) {
          case 'start': return 'start';
          case 'end': return 'flex-end';
          case 'center': return 'center';
          case 'around': return 'space-around';
          case 'between': return 'space-between';
        }
      },
    },
  }
</script>

<style scoped lang="scss">
  @import 'Row';
</style>