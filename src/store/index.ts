import { configureStore } from '@reduxjs/toolkit'
//中间件插件示例：添加redux-logger中间件
import logger from 'redux-logger'
//添加redux扩展功能 redux-batch 批处理
import { reduxBatch } from '@manaflair/redux-batch'
import counterSlice from './reducer/count'
export const store = configureStore({
  reducer: {
    counter: counterSlice
  },
  //使用redux-logger中间件
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
  //生产环境关闭devTools // 安装dev工具  chrome应用商店 安装 React Developer Tools
  devTools: process.env.NODE_ENV !== 'production',
  //redux扩展功能
  enhancers: [reduxBatch]
})
// RootState作用是返回store的方法getState的类型 function
export type RootState = ReturnType<typeof store.getState>
// AppDispatch 作用是拿到Store的dispatch方法的类型 function
export type AppDispatch = typeof store.dispatch
