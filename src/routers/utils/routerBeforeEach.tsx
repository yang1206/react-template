import type { RouteObject } from '../interface'
import routes from '../modules'

function getCurrentRouterMap(routers: RouteObject[], path: string): RouteObject {
  for (const router of routers) {
    if (router.path === path)
      return router
    if (router.children) {
      const childRouter = getCurrentRouterMap(router.children, path)
      if (childRouter)
        return childRouter
    }
  }
  return routes[routes.length - 1]
}

export function RouterBeforeEach({ children }: { children: React.ReactNode }) {
  const location = useLocation()
  const navigator = useNavigate()
  useEffect(() => {
    const router = getCurrentRouterMap(routes, location.pathname)
  }, [location.pathname])
  return children
}
