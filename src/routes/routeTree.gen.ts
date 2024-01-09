import { Route as rootRoute } from './../pages/__root'
import { Route as CountImport } from './../pages/count'
import { Route as IndexImport } from './../pages/index'

const CountRoute = CountImport.update({
  path: '/count',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)
declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/count': {
      preLoaderRoute: typeof CountImport
      parentRoute: typeof rootRoute
    }
  }
}
export const routeTree = rootRoute.addChildren([IndexRoute, CountRoute])
