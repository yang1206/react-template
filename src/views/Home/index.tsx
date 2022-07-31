import { useAppSelector } from '@/hooks/useStore'
import { selectCount } from '@/store/reducer/count'
import './index.less'
const Home = () => {
  const count = useAppSelector(selectCount)
  return (
    <div className="home">
      <h1>React项目模板</h1>
      <h3>React18 + Vite + React Router6 + redux-toolkit + TypeScript </h3>
      <h3>{count}</h3>
    </div>
  )
}
export default Home
