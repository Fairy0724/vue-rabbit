//createRouter创建路由实例对象，并配置路由规则
// createWebHistory创建路由历史记录对象
import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login/index.vue'
import Layout from '@/views/Layout/index.vue'
import Home from '@/views/Home/index.vue'
import Category from '@/views/Category/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  //配置路由规则 path与component对应关系
  routes: [
  // 一级路由
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      children: [
        // 二级路由
        {
          path: '',
          name: 'Home',
          component: Home,
        },
        {
          path: 'category/:id',
          name: 'Category',
          component: Category,
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },

  ],
})

export default router
