import request from '@/utils/http'

// 获取分类列表 接口 函数 
export function getCategoryAPI(id) {
  return request({
    url: '/category',
    params: {
      id
    }
  })
}