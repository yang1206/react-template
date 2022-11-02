import React from 'react'
import { HashRouter, NavLink } from 'react-router-dom'
import Router from '@/routers'
import './index.css'
const Layout = () => {
  return (
    <HashRouter>
      <div className="header">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/count">Count</NavLink>
      </div>
      <Router />
    </HashRouter>
  )
}
export default Layout
