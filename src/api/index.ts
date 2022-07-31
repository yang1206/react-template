import request from '@/utils/request'

export async function getBannerList(): Promise<any> {
  return request('/banner')
}
