import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

//引入初始化样式
import '@/styles/common.scss'
// //测试接口函数
// import {getCategoryAPI} from './apis/testAPI'
// getCategoryAPI().then(res => {
//   console.log(res);
// })

//引入懒加载指令插件并注册
import { lazyPlugin } from '@/directives/index'
const app = createApp(App)

app.use(createPinia())
app.use(router)
//懒加载
app.use(lazyPlugin)

app.mount('#app')

