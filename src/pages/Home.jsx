import Hero from '../sections/hero/Hero'
import Categories from '../sections/categories/Categories'
import Services from '../sections/services/Services'
import HowItWorks from '../sections/howItWorks/HowItWorks'
import PaymentInfo from '../sections/payment/PaymentInfo'
import WhyChooseUs from '../sections/trust/WhyChooseUs'
import Stats from '../sections/trust/Stats'
import FAQ from '../sections/faq/FAQ'

function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <Services />
      <HowItWorks />
      <PaymentInfo />
      <WhyChooseUs />
      <Stats />
      <FAQ />
    </>
  )
}

export default Home