import React, { lazy } from 'react'
import type { RouteObject } from '@/routers/interface'
import lazyLoad from '@/routers/utils/lazyLoad'
import Home from '@/views/Home'
const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/count',
    element: lazyLoad(lazy(() => import('@/views/Count'))),
  },
]
export default routes
