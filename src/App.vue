<template>
  <div class="app">
    <h2 class="title">Vue路由测试</h2>
    <!-- 导航区 -->
    <div class="navigate">
      <RouterLink  to="/home" active-class="active">首页</RouterLink>
      <RouterLink  :to="{name:'xinwen'}" active-class="active">新闻</RouterLink>
      <RouterLink  :to="{path:'/about'}" active-class="active">关于</RouterLink>
    </div>
    <!-- 展示区 -->
    <div class="main-content">
      <RouterView></RouterView>  
    </div>
  </div>
</template>

<script lang="ts" setup name="App">
import { RouterView ,RouterLink} from "vue-router";
</script>

<style>

</style>
