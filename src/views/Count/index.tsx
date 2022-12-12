import { useCountStore } from '@/store'
const Count = () => {
  const { count, inc, asyncInc } = useCountStore()
  return (
    <div>
      <div style={{ textAlign: 'center' }}>当前的Count：{count}</div>
      <button
        onClick={inc}
      >
        加1
      </button>
      <button
        onClick={asyncInc}
      >
        异步加1
      </button>
    </div>
  )
}
export default Count
