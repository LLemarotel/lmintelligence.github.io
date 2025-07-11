import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2025 LM Intelligence. Tous droits réservés.
          </p>
          
          {/* Trustpilot widget placeholder */}
          <div className="trustpilot-widget" data-locale="fr-FR">
            <a href="https://fr.trustpilot.com/review/lmintelligence.fr" 
               target="_blank" 
               rel="noopener noreferrer"
               className="text-gray-400 hover:text-white"
            >
              Trustpilot
            </a>
          </div>
          
          <a href="/terms-of-service" 
             className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            Conditions d'utilisation
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer