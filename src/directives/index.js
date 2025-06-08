import {useIntersectionObserver} from '@vueuse/core'
//定义懒加载插件
export const lazyPlugin = {
  install(app) {
    //懒加载指令逻辑
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
              // 停止监听--防止浪费
              stop()
            }
        }
        )
      }
    })
  }
}