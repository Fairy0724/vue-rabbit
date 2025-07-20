// 管理用户数据
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { loginAPI } from '@/apis/user'

export const useUserStore = defineStore('user', () => {
  // 1.定义state
  // 用户信息
  const userInfo = ref({})

  // 2.定义action
  // 获取用户信息
  const getUserInfo = async ({ account, password }) => {
    const res = await loginAPI({ account, password })
    userInfo.value = res.result
  }
  // 3.导出返回数据和方法
  return { userInfo, getUserInfo }
}, {
  // 持久化配置
  persist: true
})