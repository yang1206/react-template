import request from '@/service/index'

export const getBannerList = (data?: any) => {
  return request({
    url: '/banner',
    method: 'GET',
    data,
  })
}
