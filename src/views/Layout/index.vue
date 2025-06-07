<script setup>
defineOptions({ name: 'LayoutIndex' })

import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'

</script>

<template>
  <div>
    <!-- 顶部导航栏 -->
    <LayoutNav />
    <!-- 头部 -->
    <LayoutHeader />
    <!-- 内容区 -->
    <!-- 二级路由出口 -->
    <RouterView />
    <!-- 底部 -->
    <LayoutFooter />
  </div>
</template>

<style scoped></style>
