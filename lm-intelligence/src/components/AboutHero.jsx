import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const AboutHero = () => {
  const { ref, isInView } = useScrollAnimation()

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800 relative">
      <div className="max-w-full px-4 sm:px-6 lg:px-8 lg:w-1/2">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Vos partenaires pour la création de sites web vitrines.
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Chez LM Intelligence, nous croyons en la capacité des individus et des entreprises à établir une forte présence en ligne. Avec des années d'expertise en développement et en conception web, nous fournissons des solutions innovantes adaptées à vos besoins uniques.
            </p>
          </div>
        </motion.div>
      </div>

      <div className="absolute right-0 top-0 bottom-0 w-1/2">
        <video
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          alt="Placeholder Video"
          className="w-full h-full object-cover"
          loop
          muted
          autoPlay
          playsInline
        />
      </div>
    </section>
  )
}

export default AboutHero