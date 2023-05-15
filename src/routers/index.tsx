import { useRoutes } from 'react-router-dom'
import routes from './modules'

function Router() {
  return useRoutes(routes)
}
export default Router
