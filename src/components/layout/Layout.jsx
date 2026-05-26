import Navbar from './Navbar'
import Footer from '../../sections/footer/Footer'

function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default Layout