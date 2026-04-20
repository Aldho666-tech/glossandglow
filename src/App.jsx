import { useState, useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Ticker from './components/Ticker/Ticker'
import About from './components/About/About'
import Packages from './components/Packages/Packages'
import HowItWorks from './components/HowItWorks/HowItWorks'
import WaterSection from './components/WaterSection/WaterSection'
import Testimonials from './components/Testimonials/Testimonials'
import CTA from './components/CTA/CTA'
import Footer from './components/Footer/Footer'
import FloatingWA from './components/FloatingWA/FloatingWA'
import Preloader from './components/Preloader/Preloader'

import BookingForm from './components/BookingForm/BookingForm'

const App = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Disable scrolling while loading
    if (loading) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [loading])

  return (
    <>
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      
      {!loading && (
        <>
          <Navbar />
          <Hero />
          <Ticker />
          <About />
          <Packages />
          <HowItWorks />
          <WaterSection />
          <Testimonials />
          <BookingForm />
          <CTA />
          <Footer />
          <FloatingWA />
        </>
      )}
    </>
  )
}

export default App
