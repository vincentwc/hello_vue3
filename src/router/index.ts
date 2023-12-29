// 创建一个路由器，并暴漏出去
import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
import Home from "@/pages/Home.vue";
import About from "@/pages/About.vue";
import News from "@/pages/News.vue";
import Detail from "@/pages/Detail.vue";

// 创建路由器
const router = createRouter({
  history: createWebHistory(), // 路由器的工作模式
  routes: [
    {
      name: "zhuye",
      path: "/home",
      component: Home,
    },
    {
      name: "guanyu",
      path: "/about",
      component: About,
    },
    {
      name: "xinwen",
      path: "/news",
      component: News,
      children: [
        {
          name: "xiang",
          // ?代表content可传可不传，代表参数的必要性
          path: "detail",
          component: Detail,
          // 第一种写法，将路由收到的params参数作为props传给路由组件
          // props: true,
          // 第二种写法，可以自己决定将什么作为params传给路由组件
          props(route) {
            return route.query
          },
        },
      ],
    },
  ],
});

export default router;
