import type { PropsWithChildren } from 'react'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

export const ReactQueryProvider: React.FC<PropsWithChildren> = (props: PropsWithChildren) => {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      {props.children}
    </QueryClientProvider>
  )
}
