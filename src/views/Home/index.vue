<script setup>
defineOptions({
  name: "HomeIndex",
});
import HomeCategory from "./components/HomeCategory.vue";
import HomeBanner from "./components/HomeBanner.vue";
import HomeNew from "./components/HomeNew.vue";
import HomeHot from "./components/HomeHot.vue";
import HomeProduct from "./components/HomeProduct.vue";
import HomePanel from "./components/HomePanel.vue"
</script>

<template>
  <div class="container">
    <HomeCategory />
    <HomeBanner />
  </div>
  <HomeNew />
  <HomeHot />
  <HomeProduct />

  <!-- 测试面板组件
  <HomePanel title="新鲜好物" sub-title="新鲜出炉 品质靠谱">
    <div>
      插槽
    </div>
  </HomePanel>
  <HomePanel title="人气推荐" sub-title="人气爆款 不容错过">

</HomePanel> -->
</template>

<style scoped></style>
