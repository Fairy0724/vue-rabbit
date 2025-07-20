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
//引入全局组件
import { componentPlugin } from '@/components/index.js'
const app = createApp(App)

app.use(createPinia())
app.use(router)
//懒加载
app.use(lazyPlugin)
//全局组件
app.use(componentPlugin)

app.mount('#app')

