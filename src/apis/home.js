import httpInstance from '@/utils/http'
import { ElDescriptions } from 'element-plus'

// 获取bannner
export function getBannerAPI() {
  return httpInstance({
    url:'/home/banner'
  })
}

/**
 * @description: 获取新鲜好物
 * @param {*}
 * @return {*}
 */
export const findNewAPI = () => {
  return httpInstance({
    url:'/home/new'
  })
}