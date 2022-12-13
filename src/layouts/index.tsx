import { BrowserRouter, NavLink } from 'react-router-dom'
import Footer from '@/components/Footer'
import Router from '@/routers'
const Layout = () => {
  return (
    <>
      <BrowserRouter>
        <div className="flex gap-3 justify-center">
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
