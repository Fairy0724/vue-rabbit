import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getCategoryAPI } from '@/apis/layout'

export const useCategoryStore = defineStore('category', () => {
  //state 导航列表数据
  const categoryList = ref([]);
  // action 获取导航列表数据方法
  const fetchCategory = async () => {
  const res = await getCategoryAPI();
  categoryList.value = res.result;
};
  return { categoryList, fetchCategory }
})
