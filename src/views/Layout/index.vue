<script setup>
defineOptions({ name: 'LayoutIndex' })
import { onMounted } from 'vue'

import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutFixed from './components/LayoutFixed.vue'

//触发获取导航action
import { useCategoryStore } from '@/stores/categoryStore'
const categoryStore = useCategoryStore()
onMounted(() => {
  categoryStore.fetchCategory()
})
</script>

<template>
  <div>
    <!-- 吸顶导航 -->
    <LayoutFixed />
    <!-- 顶部导航栏 -->
    <LayoutNav />
    <!-- 头部 -->
    <LayoutHeader />
    <!-- 内容区 -->
    <!-- 二级路由出口 -->
    <RouterView />
    <!-- 添加key 破坏复用机制 强制销毁 -->
    <!-- <RouterView :key="$route.fullPath"/> -->
    <!-- 底部 -->
    <LayoutFooter />
  </div>
</template>

<style scoped></style>
