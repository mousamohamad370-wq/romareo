import {
  useLocation
} from 'react-router-dom'

import Navbar
from './Navbar'

import Footer
from '../../sections/footer/Footer'

function Layout({
  children
}) {

  const location = useLocation()

  /* DASHBOARD PAGES */

  const dashboardPages = [
    '/wallet',
    '/orders',
    '/profile'
  ]

  const isDashboard =
    dashboardPages.includes(
      location.pathname
    )

  return (

    <>

      {/* NORMAL LAYOUT */}

      {!isDashboard && <Navbar />}

      {children}

      {!isDashboard && <Footer />}

    </>

  )
}

export default Layout