import { BrowserRouter, HashRouter, NavLink } from 'react-router-dom'
import Footer from '@/components/Footer'
import Router from '@/routers'

const isHash = import.meta.env.VITE_USE_HASH === 'true'

function Element() {
  return (
   <>
      <div className="flex justify-center gap-3">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/count">Count</NavLink>
      </div>
      <Router />
   </>
  )
}

function Layout() {
  return (
    <>
    {
        isHash
          ? (
            <HashRouter>
              <Element />
            </HashRouter>
            )
          : (
            <BrowserRouter>
              <Element />
            </BrowserRouter>
            )
    }

      <Footer />
    </>
  )
}
export default Layout
