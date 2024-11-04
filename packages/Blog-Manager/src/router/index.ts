import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/home/index.vue';
import Post from '@/views/post/index.vue';
import PostAdd from '@/views/post/add.vue';
import Category from '@/views/category/index.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/post',
      name: 'post',
      component: Post,
    },
    {
      path: '/category',
      name: 'category',
      component: Category
    },
    {
      path: '/post/add',
      name: 'postAdd',
      component: PostAdd
    },
    {
      path: '/post/edit/:id',
      name: 'postEdit',
      component: PostAdd
    }
  ]
})

export default router
