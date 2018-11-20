<template>
<div>

<div style="height:20px;background:#FFDAB9; padding:5px; overflow: hidden; position:relative; z-index:-2">
                 <pi-marquee :list="list" content="site">
                 </pi-marquee>


        
</div>
             <h5> list 传数组对象 &nbsp; &nbsp; content 传显示的标题 </h5>

</div>
</template>

<script>
export default {
    name: 'Marquee',
  data() {
    return {
        show: true,
        list:[ 
             {"name":"于先生1","site":"北京门头沟区1","gsmc":"柠檬树装饰1"},
            {"name":"于先生2","site":"北京门头沟区2","gsmc":"柠檬树装饰2"},
            {"name":"于先生3","site":"北京门头沟区3","gsmc":"柠檬树装饰3"},
            {"name":"于先生4","site":"北京门头沟区4","gsmc":"柠檬树装饰4"},
            {"name":"于先生5","site":"北京门头沟区5","gsmc":"柠檬树装饰5"},
            {"name":"于先生6","site":"北京门头沟区6","gsmc":"柠檬树装饰6"},
            {"name":"于先生7","site":"北京门头沟区7","gsmc":"柠檬树装饰7"},
            {"name":"于先生8","site":"北京门头沟区8","gsmc":"柠檬树装饰8"},
            {"name":"于先生9","site":"北京门头沟区9","gsmc":"柠檬树装饰9"},
            {"name":"于先生10","site":"北京门头沟区10","gsmc":"柠檬树装饰10"},
            {"name":"于先生11","site":"北京门头沟区11","gsmc":"柠檬树装饰11"}
          ]
    };

  },
    computed: {
      top() {
    
      }

    },
created(){

},
  methods: {
       
  }
}


</script>

<style>
 

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}


</style>
