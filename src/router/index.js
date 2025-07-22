//createRouter创建路由实例对象，并配置路由规则
// createWebHistory创建路由历史记录对象
import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login/index.vue'
import Layout from '@/views/Layout/index.vue'
import Home from '@/views/Home/index.vue'
import Category from '@/views/Category/index.vue'
import SubCategory from '@/views/SubCategory/index.vue'
import Detail from '@/views/Detail/index.vue'
import CartList from '@/views/CartList/index.vue'
import CheckOut from '@/views/CheckOut/index.vue'
import Pay from '@/views/Pay/index.vue'
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
        },
        {
          path: 'category/sub/:id',
          name: 'SubCategory',
          component: SubCategory,
        },
        {
          path: 'detail/:id',
          name: 'Detail',
          component: Detail,
        },
        {
          path: 'cartlist',
          name: 'CartList',
          component: CartList,
        },
        {
          path: 'checkout',
          name: 'CheckOut',
          component: CheckOut,
        },
        {
          path: 'pay',
          name: 'Pay',    
          component: Pay,
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },

  ],
  //路由滚动行为
  scrollBehavior() {
    return {
      top: 0,
    }
  }
})

export default router
