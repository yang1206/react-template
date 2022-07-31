import { useRoutes } from 'react-router-dom'
import routes from './modules'
const Router = () => {
  return useRoutes(routes)
}
export default Router
