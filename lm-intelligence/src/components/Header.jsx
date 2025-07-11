import React, { useState, useEffect } from 'react'
import { Menu, X, FileText } from 'lucide-react'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const openQuoteModal = () => {
    window.dispatchEvent(new CustomEvent('openQuoteModal'))
  }

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'navbar-translucent' : 'bg-transparent'
    }`}>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-serif">
                <span className="text-primary font-black">LM </span>
                <span className="text-gray-900 dark:text-white font-black">Intelligence</span>
              </span>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#about" className="hover:text-primary px-3 py-2 text-sm font-medium transition-colors">
                À propos
              </a>
              <a href="#our-work" className="hover:text-primary px-3 py-2 text-sm font-medium transition-colors">
                Nos réalisations
              </a>
              <a href="#contact" className="hover:text-primary px-3 py-2 text-sm font-medium transition-colors">
                Contact
              </a>
              
              <button
                onClick={openQuoteModal}
                className="cta-button flex items-center gap-2"
              >
                <FileText size={16} />
                Devis Gratuit
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="hover:text-primary focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900 border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#about" className="block px-3 py-2 text-base font-medium hover:text-primary">
                À propos
              </a>
              <a href="#our-work" className="block px-3 py-2 text-base font-medium hover:text-primary">
                Nos réalisations
              </a>
              <a href="#contact" className="block px-3 py-2 text-base font-medium hover:text-primary">
                Contact
              </a>
              
              <button
                onClick={openQuoteModal}
                className="block w-full text-left px-3 py-2 text-base font-medium bg-primary text-white rounded-md"
              >
                Devis Gratuit
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="w-full h-px bg-white/20" />
    </header>
  )
}

export default Header