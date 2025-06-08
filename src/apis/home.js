import httpInstance from '@/utils/http'

// 获取bannner
export function getBannerAPI() {
  return httpInstance({
    url:'/home/banner'
  })
}