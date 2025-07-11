import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import ThreeBackground from './ThreeBackground'

const Hero = () => {
  const openQuoteModal = () => {
    window.dispatchEvent(new CustomEvent('openQuoteModal'))
  }

  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })

  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 1, 0])

  return (
    <section id="hero" ref={ref} className="min-h-screen flex items-center relative overflow-hidden">
      <ThreeBackground scrollYProgress={scrollYProgress} opacity={backgroundOpacity} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl mb-8 leading-tight font-light">
              Créez un site web vitrine avec LM Intelligence
            </h1>
            <button
              onClick={openQuoteModal}
              className="cta-button-hero"
            >
              DEMANDER UN DEVIS GRATUIT
            </button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-full pt-[56.25%] rounded-lg overflow-hidden shadow-xl">
              <video
                src="/background_hero_video.mp4"
                className="absolute top-0 left-0 w-full h-full object-cover"
                loop
                muted
                autoPlay
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero