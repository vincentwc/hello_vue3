<template>
  <div class="news">
    <!-- 导航区 -->
    <ul>
      <li v-for="news in newsList" :key="news.id">
        <!-- query 第一种写法 -->
        <!-- <RouterLink :to="`/news/detail?id=${news.id}&title=${news.title}&content=${news.content}`">{{ news.title }}</RouterLink> -->
        <!-- query 第二种写法 -->
        <!-- <RouterLink
          :to="{
            name: 'xiang',
            query: {
              id: news.id,
              title: news.title,
              content: news.content,
            },
          }"
          >
          {{ news.title }}
        </RouterLink> -->
        <!-- params 第一种写法 -->
        <!-- <RouterLink :to="`/news/detail/${news.id}/${news.title}/${news.content}`">{{ news.title }}</RouterLink> -->
        <!-- params 第二种写法 -->
        <button @click="showNewsDetail(news)">查看新闻</button>
        <RouterLink
          :to="{
            name: 'xiang',
            params: {
              id: news.id,
              title: news.title,
              content: news.content,
            },
          }"
        >
          {{ news.title }}
        </RouterLink>
      </li>
    </ul>
    <!-- 展示区 -->
    <div class="news-content">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script lang="ts" setup name="News">
  import { reactive } from "vue";
  import { RouterView, RouterLink, useRouter } from "vue-router";
  const newsList = reactive([
    { id: 1, title: "十种抗癌食物", content: "西蓝花" },
    { id: 2, title: "如何一夜暴富", content: "金融" },
    { id: 3, title: "aaa", content: "aabbbb" },
    { id: 4, title: "fff", content: "asfa" },
  ]);

  const router = useRouter();

  interface NewInter {
    id: number;
    title: string;
    content: string;
  }

  function showNewsDetail(news: NewInter) {
    router.push({
      name: "xiang",
      params: {
        id: news.id,
        title: news.title,
        content: news.content,
      },
    });
  }
</script>

<style scoped>
  .news {
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    height: 100%;
  }
  .news ul {
    margin-top: 30px;
    /* list-style: none; */
    padding-left: 10px;
  }
  .news li::marker {
    color: #64967e;
  }
  .news li > a {
    font-size: 18px;
    line-height: 40px;
    text-decoration: none;
    color: #64967e;
    text-shadow: 0 0 1px rgb(0, 84, 0);
  }

  .news-content {
    width: 70%;
    height: 90%;
    border: 1px solid;
    margin-top: 20px;
    border-radius: 10px;
  }
</style>
