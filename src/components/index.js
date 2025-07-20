//component所有组件全局注册

//使用插件
import ImageView from './ImageView/index.vue'
import XtxSku from './XtxSku/index.vue'
export const componentPlugin = {
  install(app) {
    //app.component('name',组件配置对象)
    app.component('XtxImageView', ImageView)
    app.component('XtxSku', XtxSku)
  }
}