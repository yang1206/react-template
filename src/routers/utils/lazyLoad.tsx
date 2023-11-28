import React, { Suspense } from 'react'
import NProgress from '@/components/NProgress'

function lazyLoad(Comp: React.LazyExoticComponent<any>): React.ReactNode {
  return (
    <Suspense fallback={<NProgress />}>
      <Comp />
    </Suspense>
  )
}

export default lazyLoad
