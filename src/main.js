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

import { useIntersectionObserver } from '@vueuse/core'
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

// 定义全局指令
app.directive('img-lazy', {
  mounted(el, binding) {
    // el---指令绑定的元素 img
    // binding---binding.value指令等号后绑定表达式的值 图片url
    const { stop } = useIntersectionObserver(
      el,//监听谁
      ([{ isIntersecting }]) => {
        if (isIntersecting) {
          // 进入视口区域
          el.src = binding.value
          stop()
        }
    }
    )
  }
})
