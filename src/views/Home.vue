<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Pithy-UI</h1>
    <h1>基于 Vue 2.0 的PC端精简组件库</h1>
    <h4>目前正不断完善中...</h4>

    <router-link to="/show">开始使用</router-link>

  </div>
</template>

<script>
  // @ is an alias to /src

  export default {
    name: 'home',
    components: {}
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