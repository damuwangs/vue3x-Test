import { createRouter, createWebHashHistory } from 'vue-router'
import home from '@/views/home.vue';
import compositionAPI from "@/views/compositionAPI";
import teleport from "@/views/teleport";

const router = createRouter({
  history: createWebHashHistory(), // hash模式：createWebHashHistory，history模式：createWebHistor
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    ...compositionAPI,
    ...teleport
  ]
})

export default router;
