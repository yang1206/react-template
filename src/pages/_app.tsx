import { NavLink } from 'react-router-dom'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import Footer from '@/components/Footer'
import NProgress from '@/components/NProgress'

function Layout() {
  return (
    <>
      <main className="px-4 py-10 text-center font-sans text-gray-700 dark:text-gray-200">
        <div className="flex justify-center gap-3">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/count">Count</NavLink>
        </div>
        <Outlet />
        <NProgress />
        <Footer />
      </main>
      <ReactQueryDevtools buttonPosition="top-right" />
    </>
  )
}
export default Layout
