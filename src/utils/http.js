// axios基础封装
import axios from "axios";
import { ElMessage } from "element-plus";
import 'element-plus/theme-chalk/el-message.css'
import { useUserStore } from '@/stores/userStore'
import router from '@/router'



const httpInstance = axios.create({
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  // 超时时间
  timeout: 5000
})

//拦截器
// axios请求拦截器
httpInstance.interceptors.request.use(config => {
  const userStore = useUserStore()
  // 如果有token就携带token
  const token = userStore.userInfo.token
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
}, e => Promise.reject(e))

// axios响应式拦截器
httpInstance.interceptors.response.use(res => res.data, e => {
  // 统一处理错误
  ElMessage({
    type: 'warning',
    message: e.response.data.message
  })
  // 如果是401错误，清除用户信息
  if (e.response.status === 401) {
    const userStore = useUserStore()
    userStore.clearUserInfo()
    // 跳转到登录页
    router.push('/login')
  }
  return Promise.reject(e)
})
// 导出
export default httpInstance