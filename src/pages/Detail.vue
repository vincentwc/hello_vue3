<template>
  <ul class="news-list">
    <li>编号:{{ id }}</li>
    <li>标题:{{ title }}</li>
    <li>内容:{{ content }}</li>
  </ul>
</template>

<script lang="ts" setup name="About">
  // import { toRefs } from "vue";
  // import { useRoute } from "vue-router";
  // let route = useRoute();
  // console.log("@", route);
  // // 响应式对象解构，对象会失去响应式，需要toRefs包裹
  // let { query } = toRefs(route);

  defineProps(["id", "title", "content"]);
</script>

<style scoped></style>
