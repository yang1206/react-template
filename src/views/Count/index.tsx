import { useAppDispatch, useAppSelector } from '@/hooks/useStore'
import { add, selectCount, getAsyncInfo } from '@/store/reducer/count'
const Count = () => {
  const count = useAppSelector(selectCount)
  const dispatch = useAppDispatch()
  return (
    <div>
      <div style={{ textAlign: 'center' }}>当前的Count：{count}</div>
      <button
        onClick={() => {
          dispatch(add())
        }}
      >
        加1
      </button>
      <button
        onClick={() => {
          dispatch(getAsyncInfo())
        }}
      >
        异步加10
      </button>
    </div>
  )
}
export default Count
