import { useAtomValue, useSetAtom } from 'jotai'
import { useEventCallback } from 'usehooks-ts'
import { counterAtom } from '@/atoms/counter'

export default function Counter() {
  const setCount = useSetAtom(counterAtom)
  const increment = useEventCallback(() => setCount(c => c + 1))
  const decrement = useEventCallback(() => setCount(c => c - 1))
  const count = useAtomValue(counterAtom)

  return (
    <div>
      <p className="font-semibold">{count}</p>
      <button
        className="m-4 h-8 w-8 rounded-full text-center btn"
        onClick={increment}
      >
        +
      </button>
      <button
        className="m-4 h-8 w-8 rounded-full text-center btn"
        onClick={decrement}
      >
        -
      </button>
    </div>
  )
}
