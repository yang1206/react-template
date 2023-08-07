import { lazy } from 'react'
import type { RouteObject } from '@/routers/interface'
import lazyLoad from '@/routers/utils/lazyLoad'

const routes: RouteObject[] = [
  {
    path: '/',
    element: lazyLoad(lazy(() => import('@/pages/Home'))),
  },
  {
    path: '/count',
    name: 'Count',
    element: lazyLoad(lazy(() => import('@/pages/Count'))),
  },
]
export default routes
