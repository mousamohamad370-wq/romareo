import Navbar from './components/layout/Navbar'
import Hero from './sections/hero/Hero'
import Categories from './sections/categories/Categories'
import Services from './sections/services/Services'
import HowItWorks from './sections/howItWorks/HowItWorks'
import PaymentInfo from './sections/payment/PaymentInfo'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Categories />
      <Services />
      <HowItWorks />
      <PaymentInfo />
    </>
  )
}

export default App