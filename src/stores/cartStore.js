//购物车
// 封装购物车模块
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'


export const useCartStore = defineStore('cart', () => {
  // 1. 定义state - cartList
  const cartList = ref([])
  // 2. 定义action - addCart
  const addCart = (goods) =>{
    console.log('添加', goods)
    // 添加购物车操作
    // 已添加过 - count + 1
    // 没有添加过 - 直接push
    // 思路：通过匹配传递过来的商品对象中的skuId能不能在cartList中找到，找到了就是添加过
    const item = cartList.value.find((item) =>goods.skuId === item.skuId)
    if (item) {
      // 找到了
      item.count += goods.count
    } else {
      // 没找到
      cartList.value.push(goods)
    }
  }
  //3.删除
  const delCart = (skuId) => {
    // 使用数组过滤filter方法
    cartList.value = cartList.value.filter((item)=> item.skuId !== skuId)
  }
  //计算属性
  // 计算总数量
  //total是总和，item是cartList中的每一项
  const allCount = computed(()=>cartList.value.reduce((total, item) => total + item.count, 0))
  // 计算总价
  const allPrice = computed(() => cartList.value.reduce((price, item) => price + item.count * item.price, 0))
  return {
    cartList,
    addCart,
    delCart,
    allCount, 
    allPrice,
  }
}, {
  persist: true,
})