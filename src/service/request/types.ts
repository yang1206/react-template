import type { AxiosRequestConfig, AxiosResponse } from 'axios'
export interface RequestInterceptors<T> {
  // 请求拦截
  requestInterceptors?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorsCatch?: (err: any) => any
  // 响应拦截
  responseInterceptors?: (config: T) => T
  responseInterceptorsCatch?: (err: any) => any
}
// 自定义传入的参数
export interface RequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: RequestInterceptors<T>
}
export interface CancelRequestSource {
  [index: string]: () => void
}
export interface ResponseBody<T = any> {
  message: string
  code: number
  data?: T | T[]
}
export interface RequestResult<T = any> {
  data: T
  success: boolean
  errorMessage: string
}
