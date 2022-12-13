import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Layout from '@/layouts'
const App = () => {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <main className="font-sans px-4 py-10 text-center text-gray-700 dark:text-gray-200">
      <Layout></Layout>
    </main>
    </QueryClientProvider>

  )
}
export default App
