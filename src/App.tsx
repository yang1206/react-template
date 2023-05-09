import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Layout from '@/layouts'

function App() {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <main className="px-4 py-10 text-center font-sans text-gray-700 dark:text-gray-200">
        <Layout></Layout>
      </main>
    </QueryClientProvider>

  )
}
export default App
