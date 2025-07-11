import React from 'react'

import { Rocket, MousePointerClick, TrendingUp, ShieldCheck } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const About = () => {
  const { ref, isInView } = useScrollAnimation()

  const features = [
    {
      icon: <Rocket className="w-6 h-6 text-blue-600" />,
      title: "Rapidité Exceptionnelle",
      description: "Votre site web livré en 3 jours en moyenne.",
      color: "blue"
    },
    {
      icon: <MousePointerClick className="w-6 h-6 text-green-600" />,
      title: "Simplicité & Prise en Main",
      description: "Nous vous formons pour une autonomie complète.",
      color: "green"
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-purple-600" />,
      title: "SEO & LLMO du Futur",
      description: "Prenez l'avantage sur la recherche par IA.",
      color: "purple"
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-red-600" />,
      title: "Automatisation IA Sécurisée",
      description: "Agents locaux à l'abri des cyberattaques.",
      color: "red"
    }
  ]

  const founders = [
    {
      name: "Luca",
      role: "Co-fondateur & Développeur Principal",
      education: "Classe préparatoire ECG / EDHEC M1 Finance",
      description: "Avec un œil pour le détail et une maîtrise du code, Luca est l'architecte technique derrière nos créations. Il transforme les concepts de design complexes en expériences web fluides, performantes et sécurisées.",
      image: "/luca.png"
    },
    {
      name: "Mathieu",
      role: "Co-fondateur & Stratégiste Digital",
      education: "Classe préparatoire MPSI / DUT / IAE",
      description: "Passionné par l'intersection de la technologie et du business, Mathieu définit la vision stratégique de nos projets. Il s'assure que chaque site web que nous créons est non seulement esthétique, mais aussi un puissant moteur de croissance pour nos clients.",
      image: "/mathieu.jpeg"
    }
  ]

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-20">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Rencontrez les fondateurs
          </h3>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
            {founders.map((founder, index) => (
              <div
                key={founder.name}
                className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6"
              >
                <img
                  className="w-32 h-32 rounded-full flex-shrink-0 object-cover shadow-lg"
                  src={founder.image}
                  alt={founder.name}
                />
                <div>
                  <h4 className="text-2xl font-bold font-serif">{founder.name}</h4>
                  <p className="text-primary font-semibold mb-1">{founder.role}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{founder.education}</p>
                  <p className="text-gray-600 dark:text-gray-300">{founder.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="flex items-start"
            >
              <div className={`flex-shrink-0 bg-${feature.color}-100 dark:bg-${feature.color}-900/20 rounded-lg p-3 mr-4`}>
                {feature.icon}
              </div>
              <div>
                <h4 className="font-semibold">{feature.title}</h4>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About