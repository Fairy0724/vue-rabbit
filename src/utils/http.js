// axios基础封装
import axios from "axios";
import { ElMessage } from "element-plus";
import 'element-plus/theme-chalk/el-message.css'

const httpInstance = axios.create({
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  // 超时时间
  timeout:5000
})

//拦截器
// axios请求拦截器
httpInstance.interceptors.request.use(config => {
  return config
}, e => Promise.reject(e))

// axios响应式拦截器
httpInstance.interceptors.response.use(res => res.data, e => {
  // 统一处理错误
  ElMessage({
    type: 'warning',
    message:e.response.data.message
  })
  return Promise.reject(e)
})
// 导出
export default httpInstance