import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail } from 'lucide-react'
import { submitForm } from '../utils/formSubmission'

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [result, setResult] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    const response = await submitForm({
      ...formData,
      access_key: '42024fd5-2386-419c-a362-590e276899e7',
      subject: 'Nouveau Message depuis le site LM Intelligence'
    })
    
    setResult(response)
    setIsSubmitting(false)
    
    if (response.success) {
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
      })
      setTimeout(() => setResult(null), 5000)
    }
  }

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contactez-nous</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Commençons votre prochain projet web !
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold mb-6">Envoyez-nous un message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                    Prénom *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-800"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                    Nom *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-800"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-800"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Décrivez votre projet ou vos besoins..."
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-800"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
              >
                {isSubmitting ? 'Envoi...' : 'Envoyer le message'}
              </button>
              {result && (
                <div className={`text-center ${result.success ? 'text-green-600' : 'text-red-600'}`}>
                  {result.message}
                </div>
              )}
            </form>
          </div>

          <div
            className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Coordonnées</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-green-100 dark:bg-green-900/20 rounded-lg p-3 mr-4">
                    <Phone className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Téléphone</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      <a href="tel:+33781848311" className="hover:text-primary">
                        +33 7 81 84 83 11
                      </a> (Luca)
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      <a href="tel:+33652022750" className="hover:text-primary">
                        +33 6 52 02 27 50
                      </a> (Mathieu)
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-purple-100 dark:bg-purple-900/20 rounded-lg p-3 mr-4">
                    <Mail className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      <a href="mailto:contact@lmintelligence.fr" className="hover:text-primary">
                        contact@lmintelligence.fr
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact