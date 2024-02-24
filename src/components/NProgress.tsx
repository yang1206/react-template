import React, { Fragment, useEffect } from 'react'
import 'nprogress/nprogress.css'
import nprogress from 'nprogress'
import { useLocation } from 'react-router-dom'

const NProgress: React.FC = () => {
  const location = useLocation()

  useEffect(() => {
    nprogress.start()
    return () => {
      setTimeout(() => {
        nprogress.done()
      }, 200)
    }
  }, [location.pathname])
  return (
    <Fragment />
  )
}

export default NProgress
