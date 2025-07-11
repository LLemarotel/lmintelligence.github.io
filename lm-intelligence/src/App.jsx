import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Ourwork from './components/Ourwork'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AboutHero from './components/AboutHero'
import CookieConsent from './components/CookieConsent'
import QuoteModal from './components/QuoteModal'


function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <main>
        <Hero />
        <AboutHero />
        <About />
        <Ourwork />
        <Contact />
      </main>
      <Footer />
      <CookieConsent />
      <QuoteModal />
    </div>
  )
}

export default App