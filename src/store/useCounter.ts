import create from 'zustand'
import { devtools, persist } from 'zustand/middleware'

export interface CountState {
  count: number
  inc: () => void
  dec: () => void
  asyncInc: () => void
}
export const useCountStore = create<CountState>()(
  devtools(
    persist(
      (set, get) => ({
        count: 0,
        inc: () => set(state => ({ count: state.count + 1 })),
        dec: () => set(state => ({ count: state.count - 1 })),
        asyncInc: () => {
          setTimeout(() => {
            get().inc()
          }, 300)
        },
      }),
      {
        name: 'count-storage',
      },
    ),
  ),
)

