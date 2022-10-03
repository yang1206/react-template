import { configureStore } from '@reduxjs/toolkit'
// 中间件插件示例：添加redux-logger中间件
import counterSlice from './reducer/count'
export const store = configureStore({
  reducer: {
    counter: counterSlice
  },
  // 生产环境关闭devTools // 安装dev工具  chrome应用商店 安装 React Developer Tools
  devTools: process.env.NODE_ENV !== 'production'
})
// RootState作用是返回store的方法getState的类型 function
export type RootState = ReturnType<typeof store.getState>
// AppDispatch 作用是拿到Store的dispatch方法的类型 function
export type AppDispatch = typeof store.dispatch
