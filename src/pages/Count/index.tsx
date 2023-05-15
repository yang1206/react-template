import { useCountStore } from '@/store'

function Count() {
  const { count, inc, dec } = useCountStore()
  return (
    <div>
      <p className="font-semibold">{count}</p>
      <button
        className="m-4 h-8 w-8 rounded-full text-center btn"
        onClick={inc}
      >
        +
      </button>
      <button
        className="m-4 h-8 w-8 rounded-full text-center btn"
        onClick={dec}
      >
        -
      </button>
    </div>
  )
}
export default Count
