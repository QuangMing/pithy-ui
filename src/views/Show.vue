<template>
  <div class="show">
    <router-link to="/home">返回首页</router-link>
    <br>
    <router-link to="/show/layout">Layout 布局</router-link>
    <br>
    <router-link to="/show/button">按钮</router-link>
    <br>
    <router-link to="/show/icon">Icon</router-link>
    <br>
    
    <router-link to="/show/flexbox">Flexbox</router-link>
    <br>
    <router-link to="/show/loading">Loading</router-link>
    <br>
    <router-link to="/show/marquee">Marquee</router-link>
    <br>
    <router-link to="/show/rate">Rate</router-link>
    <Layout v-if="layout"></Layout>
    <Button v-if="button"></Button>
    <Icon v-if="icon" ></Icon>
    <Flexbox v-if="flexbox" ></Flexbox>
    <Loading v-if="loading" ></Loading>
    <Marquee v-if="marquee" ></Marquee>
    <Rate v-if="rate" ></Rate>
  </div>
</template>

<script>

  import Layout from '@/components/Layout.vue'
  import Button from '@/components/Button.vue'
  import Icon from '@/components/Icon.vue'
  import Flexbox from '@/components/Flexbox.vue'
  import Loading from '@/components/Loading.vue'
  import Marquee from '@/components/Marquee.vue'
  import Rate from '@/components/Rate.vue'

  export default {
    name: 'show',
    components: {
      Layout,
      Button,
      Icon,
      Flexbox,
      Loading,
      Marquee,
      Rate
    },
    mounted(){
    },
    methods:{
      shouldShow(msg){
        let {path} = this.$route;
        if(path.indexOf(msg) !==-1 ) return true;
        else return false;
      },
    },
    computed:{
      layout(){
        return this.shouldShow('layout');
      },
      button(){
        return this.shouldShow('button');
      },
      icon(){
        return this.shouldShow('icon');
      },
      flexbox(){
        return this.shouldShow('flexbox');
      },
      loading(){
        return this.shouldShow('loading');
      },
      marquee(){
        return this.shouldShow('marquee');
      },
      rate(){
        return this.shouldShow('rate');
      },
 
    }
  }
</script>

<style lang="scss" scoped>
  .show{
    text-align: center;
  }
</style>