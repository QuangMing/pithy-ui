<template>
  <div>
    <h1>----Layout布局----</h1>

    <h2>---基础布局---</h2>
    <div class="mycon">
      <pi-row>
        <pi-col span="24">
          <div class="pi-grid bg-purple-dark"></div>
        </pi-col>
      </pi-row>
      <pi-row>
        <pi-col span="12">
          <div class="pi-grid bg-purple"></div>
        </pi-col>
        <pi-col span="12">
          <div class="pi-grid bg-purple-light"></div>
        </pi-col>
      </pi-row>
      <pi-row>
        <pi-col span="8">
          <div class="pi-grid bg-purple"></div>
        </pi-col>
        <pi-col span="8">
          <div class="pi-grid bg-purple-light"></div>
        </pi-col>
        <pi-col span="8">
          <div class="pi-grid bg-purple"></div>
        </pi-col>
      </pi-row>
      <pi-row>
        <pi-col span="6">
          <div class="pi-grid bg-purple"></div>
        </pi-col>
        <pi-col span="6">
          <div class="pi-grid bg-purple-light"></div>
        </pi-col>
        <pi-col span="6">
          <div class="pi-grid bg-purple"></div>
        </pi-col>
        <pi-col span="6">
          <div class="pi-grid bg-purple-light"></div>
        </pi-col>
      </pi-row>
      <pi-row>
        <pi-col span="4">
          <div class="pi-grid bg-purple"></div>
        </pi-col>
        <pi-col span="4">
          <div class="pi-grid bg-purple-light"></div>
        </pi-col>
        <pi-col span="4">
          <div class="pi-grid bg-purple"></div>
        </pi-col>
        <pi-col span="4">
          <div class="pi-grid bg-purple-light"></div>
        </pi-col>
        <pi-col span="4">
          <div class="pi-grid bg-purple"></div>
        </pi-col>
        <pi-col span="4">
          <div class="pi-grid bg-purple-light"></div>
        </pi-col>
      </pi-row>
    </div>

    <h2>---分栏间隔---</h2>
    <div class="mycon">
      <pi-row gap="10">
        <pi-col span="6">
          <div class="pi-grid bg-purple"></div>
        </pi-col>
        <pi-col span="6">
          <div class="pi-grid bg-purple"></div>
        </pi-col>
        <pi-col span="6">
          <div class="pi-grid bg-purple"></div>
        </pi-col>
        <pi-col span="6">
          <div class="pi-grid bg-purple"></div>
        </pi-col>
      </pi-row>
    </div>

    <h2>---混合布局---</h2>
    <div class="mycon">
      <pi-row gap="10">
        <pi-col span="16">
          <div class="pi-grid bg-purple-dark"></div>
        </pi-col>
        <pi-col span="8">
          <div class="pi-grid bg-purple-dark"></div>
        </pi-col>
      </pi-row>
      <pi-row gap="10">
        <pi-col span="8">
          <div class="pi-grid bg-purple-dark"></div>
        </pi-col>
        <pi-col span="8">
          <div class="pi-grid bg-purple-dark"></div>
        </pi-col>
        <pi-col span="4">
          <div class="pi-grid bg-purple-dark"></div>
        </pi-col>
        <pi-col span="4">
          <div class="pi-grid bg-purple-dark"></div>
        </pi-col>
      </pi-row>
      <pi-row gap="10">
        <pi-col span="4">
          <div class="pi-grid bg-purple-dark"></div>
        </pi-col>
        <pi-col span="16">
          <div class="pi-grid bg-purple-dark"></div>
        </pi-col>
        <pi-col span="4">
          <div class="pi-grid bg-purple-dark"></div>
        </pi-col>
      </pi-row>
    </div>

    <h2>---分栏偏移---</h2>
    <div class="mycon">
      <pi-row gap="10">
        <pi-col span="6">
          <div class="pi-grid bg-purple"></div>
        </pi-col>
        <pi-col span="6" offset="6">
          <div class="pi-grid bg-purple"></div>
        </pi-col>
      </pi-row>
      <pi-row gap="10">
        <pi-col span="6" offset="6">
          <div class="pi-grid bg-purple"></div>
        </pi-col>
        <pi-col span="6" offset="6">
          <div class="pi-grid bg-purple"></div>
        </pi-col>
      </pi-row>
      <pi-row gap="10">
        <pi-col span="12" offset="6">
          <div class="pi-grid bg-purple"></div>
        </pi-col>
      </pi-row>
    </div>

    <h2>---对齐方式---</h2>
    <div class="mycon">
      <pi-row>
        <pi-col span="6">
          <div class="pi-grid bg-purple-dark"></div>
        </pi-col>
        <pi-col span="6">
          <div class="pi-grid bg-purple"></div>
        </pi-col>
        <pi-col span="6">
          <div class="pi-grid bg-purple-dark"></div>
        </pi-col>
      </pi-row>
      <pi-row justify="center">
        <pi-col span="6">
          <div class="pi-grid bg-purple-dark"></div>
        </pi-col>
        <pi-col span="6">
          <div class="pi-grid bg-purple"></div>
        </pi-col>
        <pi-col span="6">
          <div class="pi-grid bg-purple-dark"></div>
        </pi-col>
      </pi-row>
      <pi-row justify="end">
        <pi-col span="6">
          <div class="pi-grid bg-purple-dark"></div>
        </pi-col>
        <pi-col span="6">
          <div class="pi-grid bg-purple"></div>
        </pi-col>
        <pi-col span="6">
          <div class="pi-grid bg-purple-dark"></div>
        </pi-col>
      </pi-row>
      <pi-row justify="between">
        <pi-col span="6">
          <div class="pi-grid bg-purple-dark"></div>
        </pi-col>
        <pi-col span="6">
          <div class="pi-grid bg-purple"></div>
        </pi-col>
        <pi-col span="6">
          <div class="pi-grid bg-purple-dark"></div>
        </pi-col>
      </pi-row>
      <pi-row justify="around">
        <pi-col span="6">
          <div class="pi-grid bg-purple-dark"></div>
        </pi-col>
        <pi-col span="6">
          <div class="pi-grid bg-purple"></div>
        </pi-col>
        <pi-col span="6">
          <div class="pi-grid bg-purple-dark"></div>
        </pi-col>
      </pi-row>
    </div>


    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <div class="foot"></div>
    <h3>Eric Chen</h3>
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