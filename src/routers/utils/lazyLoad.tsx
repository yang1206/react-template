import React, { Suspense } from 'react'
import { RouterBeforeEach } from './routerBeforeEach'
import NProgress from '@/components/NProgress'

/**
 * @description 路由懒加载
 * @param {Element} Comp 需要访问的组件
 * @returns element
 */
function lazyLoad(Comp: React.LazyExoticComponent<any>): React.ReactNode {
  return (
    <Suspense fallback={<NProgress />}>
      <RouterBeforeEach>
        <Comp />
      </RouterBeforeEach>
    </Suspense>
  )
}

export default lazyLoad
