import { useRouterState } from '@tanstack/react-router'
import nprogress from 'nprogress'
import React, { Fragment, useEffect } from 'react'
import 'nprogress/nprogress.css'

const NProgress: React.FC = () => {
  const { location } = useRouterState()

  useEffect(() => {
    nprogress.start()
    return () => {
      setTimeout(() => {
        nprogress.done()
      }, 200)
    }
  }, [location.href])
  return (
    <Fragment />
  )
}

export default NProgress
