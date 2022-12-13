import { useCountStore } from '@/store'
const Count = () => {
  const { count, inc, dec } = useCountStore()
  return (
    <div>
      <p className="font-semibold">{count}</p>
      <button
        className="btn m-4 h-8 w-8 rounded-full text-center"
        onClick={inc}
      >
        +
      </button>
      <button
        className="btn m-4 h-8 w-8 rounded-full text-center"
        onClick={dec}
      >
        -
      </button>
    </div>
  )
}
export default Count
