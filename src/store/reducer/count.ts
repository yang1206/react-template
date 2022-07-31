import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { RootState } from '@/store'
interface InitialState {
  count: number
  text?: string
}

interface PromiseNum {
  number: number
}

const initialState: InitialState = {
  count: +0,
  text: '我是文字'
}

const promise_one: Promise<PromiseNum> = new Promise(res => {
  setTimeout(() => {
    res({ number: 10 })
  }, 2000)
})

// 异步Action
export const getAsyncInfo = createAsyncThunk('getAsyncInfo', async () => {
  const data = await promise_one
  return data
})

export const countSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    add: (state: InitialState) => {
      state.count += 1
    },
    minus: (state: InitialState) => {
      state.count -= 1
    },
    change: (state: InitialState) => {
      state.text = '我是改变了的文字'
    },
    back: (state: InitialState) => {
      state.text = '我是文字'
    }
  },
  extraReducers: builder => {
    // 进行请求阶段的一些操作
    builder.addCase(getAsyncInfo.pending, () => {
      console.log('进行中')
    })
    builder.addCase(getAsyncInfo.fulfilled, (state, action) => {
      console.log('action.payload: ', action.payload) //{number:"10"}
      console.log('state: ', state.text) //我是文字
      state.count += action.payload.number
      console.log('成功')
    })
    builder.addCase(getAsyncInfo.rejected, () => {
      console.log('失败')
    })
  }
})
export const selectCount = (state: RootState) => state.counter.count
export const { add, minus, change, back } = countSlice.actions
export default countSlice.reducer
