//购物车
// 封装购物车模块
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { useUserStore } from './userStore'
import { insertCartAPI, findNewCartListAPI, delCartAPI } from '@/apis/cart'

export const useCartStore = defineStore('cart', () => {
  // 引入用户模块
  const userStore = useUserStore()
  // 是否登录
  // 通过计算属性判断用户是否登录
  const isLogin = computed(() => userStore.userInfo.token)
  // 1. 定义state - cartList
  const cartList = ref([])

  //  获取最新的购物车列表
  const updateNewList = async () => {
    // 获取最新的购物车列表
    const res = await findNewCartListAPI()
    // 规范后端返回项的规格字段，兼容 attrsText / specsText / specs 数组
    const list = (res.result || []).map(item => {
      const attrsText = item.attrsText || item.specsText || (item.specs && Array.isArray(item.specs) ? item.specs.map(s => s.valueName || s.value || s).join(' ') : '')
      return Object.assign({}, item, { attrsText })
    })
    // 更新购物车列表
    cartList.value = list
  }

  // 2. 定义action - addCart
  const addCart = async (goods) => {
    const { skuId, count } = goods
    if (isLogin.value) {
      // 登录状态下
      // 1. 先把本地的购物车合并到服务器
      if (cartList.value.length > 0) {
        // 有本地购物车数据才需要合并
        const promiseArr = cartList.value.map(item => {
          return insertCartAPI({ skuId: item.skuId, count: item.count })
        })
        await Promise.all(promiseArr)
        // 清空本地购物车
        cartList.value = []
      }
      // 2. 添加新商品到服务器
      await insertCartAPI({ skuId, count })
      updateNewList()
    } else {
      // 未登录状态下
      const item = cartList.value.find((item) => goods.skuId === item.skuId)
      if (item) {
        item.count += goods.count
      } else {
        cartList.value.push(goods)
      }
    }

  }
  //3.删除
  const delCart = async (skuId) => {
    if (isLogin.value) {
      // 登录状态下
      // 1. 调用接口删除服务器上的商品
      await delCartAPI([skuId])
      updateNewList()
    }
    // 未登录状态下
    else {
      // 使用数组过滤filter方法
      cartList.value = cartList.value.filter((item) => item.skuId !== skuId)
    }
  }


  //计算属性
  // 1)计算总数量
  //total是总和，item是cartList中的每一项
  const allCount = computed(() => cartList.value.reduce((total, item) => total + item.count, 0))
  // 2)计算总价
  const allPrice = computed(() => cartList.value.reduce((price, item) => price + item.count * item.price, 0))
  // 3)已选择数量
  const selectedCount = computed(() => cartList.value.filter(item => item.selected).reduce((total, item) => total + item.count, 0))
  // 4)已选择商品合计
  const selectedPrice = computed(() => cartList.value.filter(item => item.selected).reduce((price, item) => price + item.count * item.price, 0))
  // 单选框
  const singleCheck = (skuId, selected) => {
    // skuId是商品的唯一标识，selected是选中状态
    // 找到对应的商品对象，修改selected状态
    const item = cartList.value.find((item) => item.skuId === skuId)
    if (item) {
      item.selected = selected
    }
  }
  // 全选
  const allCheck = (selected) => {
    // selected是全选框的选中状态
    cartList.value.forEach(item => {
      item.selected = selected
    })
  }
  //是否全选
  const isAll = computed(() =>
    // 判断cartList中所有商品的selected状态是否都为true
    cartList.value.every(item => item.selected)
  )

  // 清除购物车
  const clearCart = () => {
    cartList.value = []
  }
  return {
    cartList,
    addCart,
    delCart,
    allCount,
    allPrice,
    selectedCount,
    selectedPrice,
    singleCheck,
    allCheck,
    isAll,
    clearCart,
  }
}, {
  persist: true,
})