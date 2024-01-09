import { FileRoute } from '@tanstack/react-router'
import Counter from '@/components/Counter'

export const Route = new FileRoute('/count').createRoute({
  component: Count,
})
function Count() {
  return (
    <Counter />
  )
}
