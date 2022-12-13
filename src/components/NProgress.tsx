import React, { Fragment, useEffect } from 'react'
import 'nprogress/nprogress.css'
import nprogress from 'nprogress'

const NProgress: React.FC = () => {
  useEffect(() => {
    nprogress.start()
    return () => {
      nprogress.done()
    }
  }, [])
  return (
    <Fragment />
  )
}

export default NProgress
