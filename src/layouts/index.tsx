import { BrowserRouter, NavLink } from 'react-router-dom'
import Footer from '@/components/Footer'
import Router from '@/routers'

function Layout() {
  return (
    <>
      <BrowserRouter>
        <div className="flex justify-center gap-3">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/count">Count</NavLink>
        </div>
        <Router />
      </BrowserRouter>
      <Footer />
    </>
  )
}
export default Layout
