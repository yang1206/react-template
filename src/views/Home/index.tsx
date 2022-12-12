import { useCountStore } from '@/store'
import './index.css'
const Home = () => {
  const { count } = useCountStore()
  return (
    <div className="home">
      <h1>React项目模板</h1>
      <h3>React18 + Vite + React Router6 + Zustand + TypeScript </h3>
      <h3>{count}</h3>
    </div>
  )
}
export default Home
